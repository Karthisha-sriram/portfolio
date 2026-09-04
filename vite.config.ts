import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { defineConfig, Plugin } from 'vite';

function photoServerPlugin(): Plugin {
  return {
    name: 'photo-server-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/photo-status' && req.method === 'GET') {
          const photoExists = fs.existsSync(path.resolve('public/assets/photo.png'));
          const cutoutExists = fs.existsSync(path.resolve('public/assets/photo-cutout.png'));
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ photoExists, cutoutExists }));
          return;
        }

        if (req.url === '/api/upload-photo' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              let base64Data = data.imageBase64 || data.image;
              if (base64Data.includes('base64,')) {
                base64Data = base64Data.split('base64,')[1];
              }
              const buffer = Buffer.from(base64Data, 'base64');
              const publicAssetsDir = path.resolve('public/assets');
              if (!fs.existsSync(publicAssetsDir)) {
                fs.mkdirSync(publicAssetsDir, { recursive: true });
              }

              const photoPath = path.join(publicAssetsDir, 'photo.png');
              const cutoutPath = path.join(publicAssetsDir, 'photo-cutout.png');
              fs.writeFileSync(photoPath, buffer);

              // Edge floodfill background removal preserving white clothing
              try {
                execSync(
                  `convert "${photoPath}" -bordercolor white -border 1x1 -fuzz 10% -fill none -floodfill +0+0 white -shave 1x1 "${cutoutPath}"`,
                  { stdio: 'ignore' }
                );
              } catch (e) {
                fs.copyFileSync(photoPath, cutoutPath);
              }

              const distAssetsDir = path.resolve('dist/assets');
              if (fs.existsSync(distAssetsDir)) {
                fs.copyFileSync(photoPath, path.join(distAssetsDir, 'photo.png'));
                fs.copyFileSync(cutoutPath, path.join(distAssetsDir, 'photo-cutout.png'));
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: true,
                  photoUrl: '/assets/photo.png?t=' + Date.now(),
                  cutoutUrl: '/assets/photo-cutout.png?t=' + Date.now(),
                })
              );
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), photoServerPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

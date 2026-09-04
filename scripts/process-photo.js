import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

export function processPhoto() {
  const photoPath = path.resolve('public/assets/photo.png');
  const cutoutPath = path.resolve('public/assets/photo-cutout.png');
  
  if (fs.existsSync(photoPath)) {
    try {
      console.log('Processing public/assets/photo.png with edge floodfill background removal...');
      // Use border 1x1 + floodfill from (0,0) with white color to only remove external background, protecting white clothing
      execSync(`convert "${photoPath}" -bordercolor white -border 1x1 -fuzz 10% -fill none -floodfill +0+0 white -shave 1x1 "${cutoutPath}"`, { stdio: 'inherit' });
      console.log('Successfully created public/assets/photo-cutout.png');
      
      // Also copy to dist if dist exists
      const distCutout = path.resolve('dist/assets/photo-cutout.png');
      if (fs.existsSync(path.resolve('dist/assets'))) {
        fs.copyFileSync(cutoutPath, distCutout);
        fs.copyFileSync(photoPath, path.resolve('dist/assets/photo.png'));
      }
    } catch (err) {
      console.error('Error processing photo:', err);
    }
  }
}

processPhoto();

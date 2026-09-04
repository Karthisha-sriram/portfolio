import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PhotoContextType {
  photoSrc: string;
  cutoutSrc: string;
  hasLoadedPhoto: boolean;
  uploadPhoto: (file: File) => Promise<boolean>;
}

const PhotoContext = createContext<PhotoContextType>({
  photoSrc: '/assets/photo.png',
  cutoutSrc: '/assets/photo-cutout.png',
  hasLoadedPhoto: false,
  uploadPhoto: async () => false,
});

export const PhotoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    return localStorage.getItem('karthisha_portfolio_photo') || '/assets/photo.png';
  });
  const [cutoutSrc, setCutoutSrc] = useState<string>(() => {
    return localStorage.getItem('karthisha_portfolio_cutout') || '/assets/photo-cutout.png';
  });
  const [hasLoadedPhoto, setHasLoadedPhoto] = useState<boolean>(() => {
    return Boolean(localStorage.getItem('karthisha_portfolio_photo'));
  });

  // Verify server photo status on mount
  useEffect(() => {
    fetch('/api/photo-status')
      .then((res) => res.json())
      .then((data) => {
        if (data.photoExists) {
          setPhotoSrc('/assets/photo.png?v=' + Date.now());
          setHasLoadedPhoto(true);
        }
        if (data.cutoutExists) {
          setCutoutSrc('/assets/photo-cutout.png?v=' + Date.now());
          setHasLoadedPhoto(true);
        }
      })
      .catch(() => {
        // Fallback to direct asset load check
      });
  }, []);

  const uploadPhoto = async (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target?.result as string;
        if (!base64) {
          resolve(false);
          return;
        }

        // Immediately update state and localStorage for instant UI response
        setPhotoSrc(base64);
        setCutoutSrc(base64);
        setHasLoadedPhoto(true);
        try {
          localStorage.setItem('karthisha_portfolio_photo', base64);
          localStorage.setItem('karthisha_portfolio_cutout', base64);
        } catch {
          // Ignore localStorage quota errors if image is very large
        }

        // Post to server for filesystem persistence & background removal
        try {
          const res = await fetch('/api/upload-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageBase64: base64 }),
          });
          const result = await res.json();
          if (result.success) {
            if (result.photoUrl) setPhotoSrc(result.photoUrl);
            if (result.cutoutUrl) setCutoutSrc(result.cutoutUrl);
          }
        } catch (err) {
          console.error('Error persisting photo to server:', err);
        }
        resolve(true);
      };
      reader.onerror = () => resolve(false);
      reader.readAsDataURL(file);
    });
  };

  // Global drag-and-drop listener: allows user to drop photo.png anywhere on screen
  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = async (e: DragEvent) => {
      e.preventDefault();
      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
          await uploadPhoto(file);
        }
      }
    };

    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('drop', handleDrop);
    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  return (
    <PhotoContext.Provider value={{ photoSrc, cutoutSrc, hasLoadedPhoto, uploadPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => useContext(PhotoContext);

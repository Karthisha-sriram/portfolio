import React, { createContext, useContext, ReactNode } from 'react';

interface PhotoContextType {
  photoSrc: string;
  cutoutSrc: string;
  hasLoadedPhoto: boolean;
  uploadPhoto: (file: File) => Promise<boolean>;
}

const photoSrc = '/portfolio/assets/photo.png';
const cutoutSrc = '/portfolio/assets/photo-cutout.png';

const PhotoContext = createContext<PhotoContextType>({
  photoSrc,
  cutoutSrc,
  hasLoadedPhoto: true,
  uploadPhoto: async () => false,
});

export const PhotoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const uploadPhoto = async (_file: File): Promise<boolean> => {
    return false;
  };

  return (
    <PhotoContext.Provider
      value={{
        photoSrc,
        cutoutSrc,
        hasLoadedPhoto: true,
        uploadPhoto,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => useContext(PhotoContext);
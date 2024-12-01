"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface ImageGalleryProps {
  photos: {
    images: { url: string };
    photoRegions: { region: string };
  }[];
}

export function ImageGallery({ photos }: ImageGalleryProps) {
  const allImages = photos.map((photo) => photo.images);

  const [selectedImage, setSelectedImage] = useState(
    allImages.length > 0 ? allImages[0] : { url: "" }
  );

  const selectImage = (image: { url: string }) => {
    setSelectedImage(image);
  };

  const navigateImage = (direction: number) => {
    if (allImages.length === 0) return;

    const currentIndex = allImages.findIndex((img) => img.url === selectedImage.url);
    const newIndex = (currentIndex + direction + allImages.length) % allImages.length;
    setSelectedImage(allImages[newIndex]);
  };

  if (allImages.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Image Gallery</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='md:col-span-2'>
          <div className='relative aspect-[4/3] bg-muted'>
            {selectedImage.url ? (
              <Image src={selectedImage.url} alt='Selected Image' fill className='object-contain' />
            ) : (
              <p>Loading image...</p>
            )}
            <Button
              variant='ghost'
              className='absolute left-2 top-1/2 -translate-y-1/2'
              onClick={() => navigateImage(-1)}>
              <ChevronLeft className='h-8 w-8' />
              <span className='sr-only'>Previous image</span>
            </Button>
            <Button
              variant='ghost'
              className='absolute right-2 top-1/2 -translate-y-1/2'
              onClick={() => navigateImage(1)}>
              <ChevronRight className='h-8 w-8' />
              <span className='sr-only'>Next image</span>
            </Button>
          </div>
        </div>
        <div className='md:col-span-1'>
          <div className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {photos.map((photo, index) => (
              <button
                key={index}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedImage.url === photo.images.url
                    ? "ring-2 ring-primary ring-offset-2"
                    : "hover:opacity-75"
                }`}
                onClick={() => selectImage(photo.images)}>
                <Image
                  src={photo.images.url}
                  alt={`Thumbnail ${index + 1}`}
                  width={150}
                  height={150}
                  className='rounded-lg object-cover w-full h-full'
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

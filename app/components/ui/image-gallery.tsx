"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface ImageGalleryProps {
  title: string;
  photos: Photo[];
}

interface Photo {
  category: string;
  imageUrl: string;
}

export function ImageGallery({ photos }: ImageGalleryProps) {
  // Extract all image URLs from the photos array
  const allImages = photos.map((photo) => photo.imageUrl);

  // Set the initial selected image to the first image in the array, or fallback to null
  const [selectedImage, setSelectedImage] = useState<string | null>(
    allImages.length > 0 ? allImages[0] : null
  );

  const selectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const navigateImage = (direction: number) => {
    if (allImages.length === 0 || !selectedImage) return;

    const currentIndex = allImages.findIndex((img) => img === selectedImage);
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
        {/* Main Image Viewer */}
        <div className='md:col-span-2'>
          <div className='relative aspect-[4/3] bg-muted'>
            {selectedImage ? (
              <Image src={selectedImage} alt='Selected Image' fill className='object-contain' />
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

        {/* Thumbnails */}
        <div className='md:col-span-1'>
          <div className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {photos.map((photo, index) => (
              <button
                key={index}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedImage === photo.imageUrl
                    ? "ring-2 ring-primary ring-offset-2"
                    : "hover:opacity-75"
                }`}
                onClick={() => selectImage(photo.imageUrl)}>
                <Image
                  src={photo.imageUrl}
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

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

export function ImageGallery({ photos, title }: ImageGalleryProps) {
  const allImages = photos.map((photo) => photo.imageUrl);
  const categories = Array.from(new Set(photos.map((photo) => photo.category)));
  const [selectedImage, setSelectedImage] = useState<string | null>(
    allImages.length > 0 ? allImages[0] : null
  );
  const [filteredCategory, setFilteredCategory] = useState<string>(categories[0] || "");
  const filteredImages = photos.filter((photo) => photo.category === filteredCategory);

  // ======================================
  // select thumbnail
  // ======================================

  const selectImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // ======================================
  // image navigation
  // ======================================

  const navigateImage = (direction: number) => {
    if (allImages.length === 0 || !selectedImage) return;

    const currentIndex = allImages.findIndex((img) => img === selectedImage);
    const newIndex = (currentIndex + direction + allImages.length) % allImages.length;
    setSelectedImage(allImages[newIndex]);
  };

  if (allImages.length === 0) {
    return <p>No images available</p>;
  }

  // ======================================
  // filter category
  // ======================================
  const filterImagesByCategory = (category: string) => {
    setFilteredCategory(category);
    const firstImage = photos.find((photo) => photo.category === category)?.imageUrl || null;
    setSelectedImage(firstImage);
  };

  return (
    <div className='container mx-auto p-4 '>
      <h1 className='text-2xl font-bold mb-4 text-white'>{title}</h1>
      {categories.map((category, index) => (
        <button
          className='text-2xl font-bold mb-4 text-white px-2'
          key={index}
          onClick={() => filterImagesByCategory(category)}>
          {category}
        </button>
      ))}

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
            {filteredImages.map((photo, index) => (
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

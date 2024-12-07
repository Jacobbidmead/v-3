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
  // filter category
  // ======================================
  const filterImagesByCategory = (category: string) => {
    setFilteredCategory(category);
    const firstImage = photos.find((photo) => photo.category === category)?.imageUrl || null;
    setSelectedImage(firstImage);
  };

  console.log(photos);

  return (
    <div className='container mx-auto my-auto p-4 min-h-full '>
      <div className='flex lg:justify-between'>
        <h1 className='text-2xl font-bold mb-16 text-white'>{title}</h1>
        <div>
          {categories.map((category, index) => (
            <button
              className='text-2xl font-bold mb-4 text-white px-2 flex xs:flex-col'
              key={index}
              onClick={() => filterImagesByCategory(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {/* Main Image Viewer */}
        <div className='md:col-span-2 h-full'>
          <div className='relative bg-muted'>
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt='Selected Image'
                width={3000}
                height={1800}
                className='object-contain '
              />
            ) : (
              <p>Loading image...</p>
            )}
          </div>
        </div>

        {/* Thumbnails */}
        <div className='md:col-span-1'>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2'>
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
                  width={550}
                  height={250}
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

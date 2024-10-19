import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

// Updated to include 8 images
const images = [
  { id: 1, src: "/placeholder.svg?height=600&width=800", alt: "Image 1" },
  { id: 2, src: "/placeholder.svg?height=600&width=800", alt: "Image 2" },
  { id: 3, src: "/placeholder.svg?height=600&width=800", alt: "Image 3" },
  { id: 4, src: "/placeholder.svg?height=600&width=800", alt: "Image 4" },
  { id: 5, src: "/placeholder.svg?height=600&width=800", alt: "Image 5" },
  { id: 6, src: "/placeholder.svg?height=600&width=800", alt: "Image 6" },
  { id: 7, src: "/placeholder.svg?height=600&width=800", alt: "Image 7" },
  { id: 8, src: "/placeholder.svg?height=600&width=800", alt: "Image 8" },
];

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectImage = (image: any) => {
    setSelectedImage(image);
  };

  const navigateImage = (direction: any) => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Image Gallery</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='md:col-span-2'>
          <div className='relative aspect-[4/3] bg-muted'>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className='object-contain'
            />
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
            {images.map((image) => (
              <button
                key={image.id}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedImage.id === image.id
                    ? "ring-2 ring-primary ring-offset-2"
                    : "hover:opacity-75"
                }`}
                onClick={() => selectImage(image)}>
                <Image
                  src={image.src}
                  alt={image.alt}
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

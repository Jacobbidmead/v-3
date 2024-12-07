"use client";

import { ImageGallery } from "../components/ui/image-gallery";
import { useEffect, useState } from "react";

interface PhotoPageData {
  title: string;
  photos: Photo[];
}

interface Photo {
  category: string;
  imageUrl: string;
}

const Photography: React.FC<PhotoPageData> = () => {
  const [photoData, setPhotoData] = useState<PhotoPageData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/photography_page");

        if (!res.ok) {
          throw new Error("Failed to fetch landing page data");
        }

        const data: PhotoPageData[] = await res.json();
        setPhotoData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!photoData || photoData.length === 0) return <div>No data found</div>;

  const data = photoData[0];
  const { title, photos } = data;

  console.log(data);

  return (
    <>
      <ImageGallery title={title} photos={photos} />
    </>
  );
};

export default Photography;

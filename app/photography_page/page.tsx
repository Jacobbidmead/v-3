import { ImageGallery } from "../components/ui/image-gallery";

interface PhotoRegion {
  region: string;
}

interface Image {
  url: string;
}

interface Photo {
  images: Image;
  photoRegions: PhotoRegion;
}

export default async function Photography() {
  return (
    <>
      <ImageGallery photos={photos} />
    </>
  );
}

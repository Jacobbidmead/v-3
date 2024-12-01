import { ImageGallery } from "../components/ui/image-gallery";

const HYGRAPH_API_URL = process.env.HYGRAPH_API_URL;
const HYGRAPH_AUTH_TOKEN = process.env.HYGRAPH_AUTH_TOKEN;

if (!HYGRAPH_API_URL) {
  throw new Error("HYGRAPH_API_URL is not defined. Please check your environment variables.");
}

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

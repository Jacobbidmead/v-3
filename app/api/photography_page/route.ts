import { NextResponse } from "next/server";
import client from "@/lib/sanity";

interface photoPageData {
  heading: string;
  subtitle: string;
  aboutLeft: any[];
  aboutCenter: any[];
  aboutRight: any[];
}

export async function GET() {
  try {
    const query = `
    *[_type == "photoPage"] {
        title,
        photos[]-> {
        category,
        "imageUrl": image.asset->url
          }
     }`;

    const photoPageData: photoPageData[] = await client.fetch(query);

    return NextResponse.json(photoPageData, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch landing page data:", error);
    return NextResponse.json({ error: "Failed to fetch landing page data" }, { status: 500 });
  }
}

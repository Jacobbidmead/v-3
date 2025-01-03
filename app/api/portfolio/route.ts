import { NextResponse } from "next/server";
import client from "@/lib/sanity";

interface LandingPageData {
  heading: string;
  subtitle: string;
  aboutLeft: any[];
  aboutCenter: any[];
  aboutRight: any[];
}

export async function GET() {
  try {
    const query = `*[_type == "landingPage"]{
      heading,
      subtitle,
      aboutLeft,
      aboutCenter,
      aboutRight
    }`;

    const landingPageData: LandingPageData[] = await client.fetch(query);

    return NextResponse.json(landingPageData, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch landing page data:", error);
    return NextResponse.json({ error: "Failed to fetch landing page data" }, { status: 500 });
  }
}

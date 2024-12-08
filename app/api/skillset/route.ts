import { NextResponse } from "next/server";
import client from "@/lib/sanity";

interface SkillSetData {
  skills: string;
}
[];

export async function GET() {
  try {
    const query = `
   *[_type == 'skillset']{
  skills
}`;

    const skillsetData: SkillSetData[] = await client.fetch(query);

    return NextResponse.json(skillsetData, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch landing page data:", error);
    return NextResponse.json({ error: "Failed to fetch landing page data" }, { status: 500 });
  }
}

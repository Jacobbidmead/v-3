// /app/api/portfolio/route.ts

import { GraphQLClient } from "graphql-request";
import { NextResponse } from "next/server";

// Define the type of the response data you're expecting
interface Portfolio {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
}

interface FetchPortfolioResponse {
  portfolios: Portfolio[];
}

const HYGRAPH_API_URL = process.env.HYGRAPH_API_URL;
const HYGRAPH_AUTH_TOKEN = process.env.HYGRAPH_AUTH_TOKEN;

if (!HYGRAPH_API_URL || !HYGRAPH_AUTH_TOKEN) {
  throw new Error("Hygraph API URL or Auth Token is missing.");
}

const client = new GraphQLClient(HYGRAPH_API_URL, {
  headers: {
    authorization: `Bearer ${HYGRAPH_AUTH_TOKEN}`,
  },
});

const fetchPortfolio = async (): Promise<FetchPortfolioResponse> => {
  const query = `
    {
      portfolios {
        id
        title
        description
        image {
          url
        }
      }
    }
  `;

  const response = await client.request<FetchPortfolioResponse>(query);
  return response;
};

// API route handler
export async function GET() {
  try {
    const portfolios = await fetchPortfolio();
    return NextResponse.json({ portfolios });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching portfolios:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}

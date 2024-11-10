// /lib/fetchPortfolio.ts
import { GraphQLClient } from "graphql-request";

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

// Your Hygraph API URL and Token
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

export const fetchPortfolio = async (): Promise<FetchPortfolioResponse> => {
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

import axios from 'axios'
import { useQuery } from 'react-query'

const LISTING_URL =
  "https://app.leadplus.com.au/api/app/5c81e2ee-b62f-4edb-bb02-acf1157a372b/5468f296-1178-46aa-9fde-978fe0cea7d3?accountId=f49d66d9-9b99-4d14-834f-e060f85446d0";

async function getListings() {
  try {
    const response = (await axios.get(LISTING_URL)) as any;
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function useGetListings() {
  return useQuery(["getAllListings"], getListings, {
    select(data) {
      return data.page.blocks.find(
        (block: any) => block["block_type"] === "seeker_listing"
      ).content.listings;
    },
  });
}

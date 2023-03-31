import request from "../utils/request";
import { useState,updateListing } from "../store";
import { isMock, mockGetListingResponse } from "./mock";

const {  listingList, userInfo } = useState();

export async function getPOIListing({ yid }) {
  if (isMock) {
    const data = mockGetListingResponse;
    if (data.code === 200) {
      updateListing({yid, data: data.data});
      console.log(
        "get POIlisting success, current POIlisting is: ",
        listingList.value
      );
      return true;
    }
    console.log(
      "get POIlisting error, current POIlisting is: ",
      listingList.value
    );
    return false;
  }
  const { data } = await request({
    url: `v1/listings/${userInfo.value.username}/poilistings?yid=${yid}`,
    method: "GET",
  });
  if (data.code === 200) {
    updateListing({yid, data: data.data});
    console.log(
      "get POIlisting success, current POIlisting is: ",
      listingList.value
    );
    return true;
  }
  console.log(
    "get POIlisting error, current POIlisting is: ",
    listingList.value
  );
  return false;
}

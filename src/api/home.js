import request from "../utils/request";
import { useState } from "../store";

const { showData, userInfo } = useState();
import { isMock, mockGetShowDataResponse } from "./mock";
export async function getShowData() {
  if (isMock) {
    const data = mockGetShowDataResponse;
    if (data.code === 200) {
      showData.value = data.data;
      console.log(
        "get showData success, current showData is: ",
        showData.value
      );
      return true;
    }
    console.log("get showData error");
    return false;
  }
  try {
    const { data } = await request({
      method: "GET",
      url: `v1/listings/${userInfo.value.username}/index`,
    });
    if (data.code === 200) {
      showData.value = data.data;
      console.log("get showData success, current showData is: ", showData.value);
      return true;
    }
    console.log("get showData error, current showData is: ", showData.value);
  } catch (error) {
    console.log("get showData error, current showData is: ", showData.value);
    return false;
  }
}

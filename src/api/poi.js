import request from "../utils/request";
import {useState,updatePOIList,updatePOIItem} from "../store";
import { mockGetPOIResponse, mockPOIItem, isMock } from "./mock";
const { POIList, userInfo} = useState();
let yid = 1998
export async function getPOI() {
  if (isMock) {
    const data = mockGetPOIResponse;
    if (data.code === 200) {
      updatePOIList(data.data);
      console.log("get POI success, current POIList is: ", POIList.value)
      return true;
    }
    console.log("get POI error, current POIList is: ", POIList.value);
    return false;
  }

  const { data } = await request({
    method: "GET",
    url: `v1/main/${userInfo.value.username}/poi_command`,
  });
   if (data.code === 200) {
      updatePOIList(data.data);
      console.log("get POI success, current POIList is: ", POIList.value)
      return true;
    }
    console.log("get POI error, current POIList is: ", POIList.value);
    return false;
}

export async function createPOI({
  name,
  address,
  lat,
  lng,
  phone,
  country,
  province,
  city,
  district,
  businesshour,
  specialbusinesshour,
  status,
}) {
  if (isMock) {
    POIList.value.push({
      name,
      address,
      lat,
      lng,
      phone,
      country,
      province,
      city,
      district,
      businesshour,
      specialbusinesshour,
      status,
      yid: yid++
    })
    console.log("create new POI success, current POIList is:", POIList.value);
    return true;
  }
  const { data } = await request({
    method: "POST",
    url: `v1/main/${userInfo.value.username}/poi_command`,
    data: {
      name,
      address,
      lat,
      lng,
      phone,
      country,
      province,
      city,
      district,
      businesshour,
      specialbusinesshour,
      status,
    },
  });
  if (data.code === 200) {
    await getPOI();
    console.log("create new POI success, current POIList is:", POIList.value)
    return true;
  }
  console.log("create new POI error, current POIList is:", POIList.value);
  return false;
}

export async function updatePOI({
  name,
  address,
  lat,
  lng,
  phone,
  country,
  province,
  city,
  district,
  businesshour,
  specialbusinesshour,
  status,
  yid,
}) {
  if (isMock) {
    updatePOIItem({
        name,
        address,
        lat,
        lng,
        phone,
        country,
        province,
        city,
        district,
        businesshour,
        specialbusinesshour,
        status,
        yid,
    })
    console.log("update POI success, the current POIList is:", POIList.value)
    return true;
  }
  const { data } = await request({
    method: "PUT",
    url: `v1/main/${userInfo.value.username}/poi_command?yid=${yid}`,
    data: {
      name,
      address,
      lat,
      lng,
      phone,
      country,
      province,
      city,
      district,
      businesshour,
      specialbusinesshour,
      status,
    },
  });
  console.log(data);
  if (data.code === 200) {
    await getPOI();
    console.log("update POI success, the current POIList is:", POIList.value)
    return true;
  }
  console.log("update POI error, the current POIList is:", POIList.value)
  return false;
}

export async function deletePOI({ yid }) {
  if (isMock) {
     POIList.value = POIList.value.filter((item) => {
      if (item.yid === yid) {
        return false;
      }
      return true;
    });
    console.log("delete POI success, current POIList is:", POIList.value)
    return true;
  }
  const { data } = await request({
    method: "DELETE",
    url: `v1/main/${userInfo.value.username}/poi_command?yid=${yid}`,
  });
  if (data.code === 200) {
     await getPOI();
  return true;
  }

  console.log("delete POI error, current POIList is:", POIList.value)
  return false;
}

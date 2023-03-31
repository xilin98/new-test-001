import request from "../utils/request";
import {useState,updateSubuserList} from "../store";
import { isMock, mockGetSubuserResponse } from "./mock";
import { userInfo } from "../store";
const {subuserList} = useState();

export async function getSubuser() {
  try {
    if (isMock) {
      const data = mockGetSubuserResponse;
      if (data.code === 200) {
        console.log("get subuser success, current subuser is: ", subuserList.value)
        return true;
      }
      console.log("get subuser error, current subuser is: ", subuserList.value);
      return false;
    }
    const { data } = await request({
      method: "GET",
      url: `v1/main/${userInfo.value.username}/subuser_command`,
    });
    if (data.code == 200) {
      updateSubuserList(data.data);
      console.log("get subuser success, current subuser is: ", subuserList.value)
      return true;
    }
    console.log("get subuser error, current subuser is: ", subuserList.value)
    return false;
  } catch (error) {
    console.log("get subuser error, current subuser is: ", subuserList.value)
    return false;
  }
}

import request from "../utils/request";

export const createPOI = (username) => {
  return request({
    method: "PUT",
    url: `v1/main/${username}/poi_command`,
  });
};

export const deletePOI = (username) => {
  return request({
    method: "DELETE",
    url: `v1/main/${username}/poi_command`,
  });
};

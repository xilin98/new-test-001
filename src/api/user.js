import request from "../utils/request";

export const login = (data) => {
  return request({
    method: "POST",
    url: "/user/login",
    data,
  });
};

export const getUserInfo = (username) => {
  return request({
    method: "GET",
    url: `v1/main/${username}/userinfo`,
  });
};

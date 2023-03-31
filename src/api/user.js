import request from "../utils/request";
import { useState,updateUserInfo,clearAll } from "../store";
const {userInfo} = useState();

import {
  isMock,
  mockRegisterResponse,
  mockGetUserInfoResponse,
  mockLoginResponse,
  mockSendVerifyCodeResponse,
  mockSetBrandNameResponse,
} from "./mock";

export async function register({ username, password, phone, email, verify }) {
  if (isMock) {
    const data = mockRegisterResponse;
    if (data.code === 200) {
      updateUserInfo({...data, token: data.data.token});
      await getUserInfo();
      console.log("mock register success, response, the current userInfo is", userInfo.value);
      return true;
    }
    console.log("mock register fail, the current userInfo is", userInfo.value);
    return false;
  }

  const { data } = await request({
    method: "POST",
    url: "v1/reg",
    data: {
      username,
      password,
      phone,
      email,
      verify,
    },
  });
  if (data.code === 200) {
    updateUserInfo({...data, token: data.data.token}); ;
    await getUserInfo();
      console.log("register success, response, the current userInfo is", userInfo.value);
      return true;
  }
  console.log("register fail, the current userInfo is", userInfo.value);
  return false;
}

export async function registerUsePhone({ phone, verify }) {
  if (isMock) {
    const data = mockRegisterResponse;
    if (data.code === 200) {
      updateUserInfo( {
        ...data,
        token: data.data.token,
      });
      console.log("mock registerUsePhone success, response, the current userInfo is: ", userInfo.value);
      return true;
    }
    console.log("mock registerUsePhone fail, the current userInfo is ", userInfo.value);
    return false;
  }
  const { data } = await request({
    method: "POST",
    url: "v1/reg_mobile",
    data: {
      phone,
      verify,
    },
  });

  if (data.code === 200) {
    updateUserInfo( {
      ...data,
      token: data.data.token,
    });
    await getUserInfo();
    console.log("registerUsePhone success, the current userInfo is: ", userInfo.value)
    return true;
  }
  console.log("register. ", data);
  return false;
}

export async function registerSub({ phone, verify, commandId }) {
  if (isMock) {
    const data = mockRegisterResponse;
    if (data.code === 200) {
      updateUserInfo({
        ...data,
        token: data.data.token,
      });
      await getUserInfo();
      console.log("mock registerSub success, the current userInfo is", userInfo.value);
      return true;
    }
    console.log("mock registerSub fail, the current userInfo is", userInfo.value);
    return false;
  }
  const { data } = await request({
    method: "POST",
    url: `v1/main/${userInfo.value.username}/subuser_command`,
    data: {
      phone,
      verify,
      commandId,
    },
  });
  if (data.code === 200) {
    userInfo.value = Object.assign(userInfo.value, {
      ...data,
      token: data.data.token,
    });
    await getUserInfo(data.username);
    console.log("mock registerSub success, the current userInfo is", userInfo.value);
    return true;
  }
  console.log("mock registerSub fail, the current userInfo is", userInfo.value);
  return false;
}

export async function sendVerifyCode({ phone }) {
  if (isMock) {
    const data = mockSendVerifyCodeResponse;
    if (data.code === 200) {
      console.log("mock sendVerifyCode success, the current userInfo is", userInfo.value);
      return true;
    }
    console.log("mock sendVerifyCode fail, the current userInfo is", userInfo.value);
    return false;
  }
  const { data } = request({
    method: "POST",
    url: `v1/sms`,
    data: {
      phone,
    },
  });
  if (data.code === 200) {
    console.log("sendVerifyCode success, response ", data);
    return true;
  }
  console.log("sendVerifyCode fail, response: ", data);
  return false;
}

export async function login({ username, password }) {
  if (isMock) {
    const data = mockLoginResponse;
    if (data.code === 200) {
      updateUserInfo({
        ...data,
        token: data.data.token,
      })
      await getUserInfo();
      console.log("mock login success, the current userInfo is", userInfo.value);
      return true;
    }
    console.log("mock login fail, the current userInfo is", userInfo.value);
    return false;
  }
  const { data } = await request({
    method: "POST",
    url: "v1/login",
    data: {
      username,
      password,
    },
  });

  if (data.code === 200) {
    updateUserInfo({
      ...data,
      token: data.data.token,
    });
    await getUserInfo();
    console.log("login success, the current userInfo is", userInfo.value);
    return true;
  }

  console.log("login fail, the current userInfo is", userInfo.value);
  return false;
}

export const loginUsePhone = async ({ phone, verify }) => {
  if (isMock) {
    const data = mockLoginResponse;
    if (data.code === 200) {
      updateUserInfo(
        {
          ...data,
          token: data.data.token,
        }
      )
      await getUserInfo(data.username);
      console.log("mock loginUsePhone success, the current userInfo is", userInfo.value);
      return true;
    }
    console.log("mock loginUsePhone fail, the current userInfo is", userInfo.value);
    return false;
  }
  const { data } = await request({
    method: "POST",
    url: "v1/mobile_login",
    data: {
      phone,
      verify,
    },
  });

  if (data.code === 200) {
    updateUserInfo(
      {
        ...data,
        token: data.data.token,
      })

    await getUserInfo(data.username);
    console.log("loginUsePhone success, the current userInfo is", userInfo.value);
    return true;
  }
  console.log("loginUsePhone fail, the current userInfo is", userInfo.value);
  return false;
};

export async function setBrandName({ brandName }) {
  if (isMock) {
    const data = mockSetBrandNameResponse;
    if (data.code === 200) {
      updateUserInfo({
        ...data,
        brandName
      })
      console.log("mock setBrandName success, the current userInfo is", userInfo.value);
      return true;
    }
    console.log("mock setBrandName fail, the current userInfo is", userInfo.value);
    return false;
  }

  const { data } = await request({
    method: "POST",
    url: `v1/main/set_brandName`,
    data: {
      brandName,
      commandId: userInfo.value.commandId,
    },
  });
  if (data.code === 200) {
    await getUserInfo();
    console.log("setBrandName success, the current userInfo is", userInfo.value);
    return true;
  }
  console.log("setBrandName fail, the current userInfo is", userInfo.value);
  return false;
}

export async function getUserInfo() {
  if (isMock) {
    const data = mockGetUserInfoResponse;
    if (data.code === 200) {
      updateUserInfo(data.data)
      console.log("mock getUserInfo success, the current userInfo is", userInfo.value);
      return true;
    }
    console.log("mock getUserInfo fail, the current userInfo is", userInfo.value);
    return false;
  }
  const { data } = await request({
    method: "GET",
    url: `v1/main/${userInfo.value.username}/userinfo`,
  });
  if (data.code === 200) {
    updateUserInfo(data.data)
    console.log("getUserInfo success, the current userInfo is", userInfo.value);
    return true;
  }
  console.log("getUserInfo fail, the current userInfo is", userInfo.value);
  return false;
}

export async function logout() {
  clearAll()
  console.log("logout success, the current userInfo is", userInfo.value);
  return true;
}

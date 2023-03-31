<template>
  <test-button block @click="registerH">register</test-button>
  <test-button block @click="registerUsePhoneH">registerUsePhone</test-button>
  <test-button block @click="registerSubH">registerSub</test-button>
  <test-button block @click="sendVerifyCodeH">sendVerifyCode</test-button>
  <test-button block @click="loginH">login</test-button>
  <test-button block @click="loginUsePhoneH">loginUsePhone</test-button>
  <test-button block @click="setBrandNameH">setBrandName</test-button>
  <test-button block @click="getUserInfoH">getUserInfo</test-button>

  <hr />
  <test-button block @click="getPOIH">getPOI</test-button>
  <test-button block @click="createPOIH">createPOI</test-button>
  <test-button block @click="updatePOIH">updatePOI</test-button>
  <test-button block @click="deletePOIH">deletePOI</test-button>

  <hr />
  <test-button block @click="getPoiListingH">getPoiListing</test-button>
  <hr />

  <test-button block @click="getShowDataH">getShowData</test-button>
  <hr />

  <test-button block @click="getSubuserH">getSubuser</test-button>

  <hr />
  <test-button block @click="logoutH">logout</test-button>
</template>

<script setup>
import TestButton from "../../components/TestButton.vue";
import {
  register,
  registerUsePhone,
  registerSub,
  sendVerifyCode,
  login,
  loginUsePhone,
  setBrandName,
  getUserInfo,
  logout,
} from "../../api/user.js";
import { getPOI, createPOI, updatePOI, deletePOI } from "../../api/poi.js";

import { getPOIListing } from "../../api/listing.js";

import { getShowData } from "../../api/home.js";

import { getSubuser } from "../../api/subuser.js";

const registerH = () => {
  register({
    username: "xilin",
    password: "A123456a",
    email: "foo@bar",
    phone: "17730104297",
    verify: "347884",
  }).then((res) => {
    console.log(res);
  });
};

const registerUsePhoneH = () => {
  registerUsePhone({ phone: "17730104297", verify: "" }).then((res) => {
    console.log(res);
  });
};

const registerSubH = () => {
  registerSub({}).then((res) => {
    console.log(res);
  });
};

const sendVerifyCodeH = () => {
  sendVerifyCode({ phone: "17730104297" }).then((res) => {
    console.log(res);
  });
};

const loginH = () => {
  login({ username: "root", password: "Yexsys_2022" }).then((res) => {
    console.log(res);
  });
};

const loginUsePhoneH = () => {
  loginUsePhone({ phone: "17730104297", verify: "" }).then((res) => {
    console.log(res);
  });
};

const setBrandNameH = () => {
  setBrandName({ brandName: "newBrandName" }).then((res) => {
    console.log(res);
  });
};
const getUserInfoH = () => {
  getUserInfo({ username: "root" }).then((res) => {
    console.log(res);
  });
};

const getPOIH = () => {
  getPOI({ username: "root" }).then((res) => {
    console.log(res);
  });
};

const createPOIH = () => {
  createPOI({
    username: "root",
    address: "address---",
    lat: "33",
    lng: "33",
    name: "name---",
    phone: "17730104297",
    status: 0,
  }).then((res) => {
    console.log(res);
  });
};

const updatePOIH = () => {
  updatePOI({
    username: "root",
    address: "add",
    lat: "33",
    lng: "33",
    name: "nam",
    phone: "17730104297",
    status: 0,
    // yid: "3328382",
    yid: "2",
  }).then((res) => {
    console.log(res);
  });
};

const deletePOIH = () => {
  deletePOI({
    username: "root",
    yid: "2",
  }).then((res) => {
    console.log(res);
  });
};

const getPoiListingH = () => {
  getPOIListing({
    yid: "3324686",
  }).then((res) => {
    console.log(res);
  });
};

const getShowDataH = () => {
  getShowData().then((res) => {
    console.log(res);
  });
};

const getSubuserH = () => {
  getSubuser().then((res) => {
    console.log(res);
  });
};

const logoutH = () => {
  logout().then((res) => {
    console.log("数据已清除");
  });
};
</script>

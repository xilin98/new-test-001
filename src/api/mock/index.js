export const isMock = true;
export const mockRegisterResponse = {
  code: 200,
  username: "xilin",
  brandName: "Yexsys",
  permission: "4",
  data: { token: "MOCK_TOCKEN" },
  commandId: "MOCK_COMMAND_ID",
};

export const mockLoginResponse = {
  code: 200,
  username: "xilin",
  brandName: "Yexsys",
  permission: "4",
  data: {
    token: "MOCK_TOCKEN",
  },
  commandId: "MOCK_COMMAND_ID",
};

export const mockSendVerifyCodeResponse = {
  code: 200,
};

export const mockSetBrandNameResponse = {
  code: 200,
};

export const mockGetUserInfoResponse = {
  code: 200,
  data: {
    username: "xilin",
    phone: "12345678901",
    homeurl: "http://www.yexsys.com",
    brandname: "Yexsys",
    email: "foo@bar.com",
  },
};

// poi
export const mockGetPOIResponse = {
  code: 200,
  data: [
    {
      yid: "1",
      name: "麦当劳",
      address: "北京市朝阳区建国路88号",
      location: "116.454198; 39.914199",
      phone: "010-65673443",
      status: 0,
      district: "朝阳区",
      city: "北京市",
      province: "北京市",
      businesshour: "周一至周五 8:00-22:00；周六、周日 9:00-22:00",
      active: 10,
      listings_status: "60%"
    },
    {
      yid: "2",
      name: "肯德基",
      address: "上海市浦东新区张杨路567号",
      location: "121.517931; 31.230416",
      phone: "021-58778976",
      status: 1,
      district: "浦东新区",
      city: "上海市",
      province: "上海市",
      businesshour: "周一至周日 8:00-23:00",
      active: 2,
      listings_status: "60%"
    },
    {
      yid: "3",
      name: "必胜客",
      address: "广州市天河区天河路208号",
      location: "113.327065; 23.135834",
      phone: "020-87654321",
      status: 0,
      district: "天河区",
      city: "广州市",
      province: "广东省",
      businesshour: "周一至周日 10:00-22:00",
      active: 1,
      listings_status: "60%"
    },
    {
      yid: "4",
      name: "星巴克",
      address: "成都市锦江区人民南路4段19号",
      location: "104.078356; 30.652828",
      phone: "028-76543210",
      status: 1,
      district: "锦江区",
      city: "成都市",
      province: "四川省",
      businesshour: "周一至周五 8:00-22:00；周六、周日 9:00-22:00",
      active: 1,
      listings_status: "60%"
    },
    {
      yid: "5",
      name: "麦当劳",
      address: "深圳市南山区高新南二道10号",
      location: "113.952357; 22.538748",
      phone: "0755-12345678",
      status: 1,
      district: "南山区",
      city: "深圳市",
      province: "广东省",
      businesshour: "周一至周日 9:00-22:00",
      active: 2,
      listings_status: "60%"
    },
    {
      yid: "6",
      name: "华莱士",
      address: "上海市松江区乐都路299号",
      location: "121.241112; 31.039269",
      phone: "021-98765432",
      status: 0,
      district: "松江区",
      city: "上海市",
      province: "上海市",
      businesshour: "周一至周五 7:00-21:00；周六、周日 8:00-21:00",
      active: 2,
      listings_status: "60%"
    },
    {
      yid: "7",
      name: "德克士",
      address: "广州市天河区华南快速路岑村段1126号",
      location: "113.355924; 23.138678",
      phone: "020-65432109",
      status: 1,
      district: "天河区",
      city: "广州市",
      province: "广东省",
      businesshour: "周一至周日 8:00-22:00",
      active: 1,
      listings_status: "60%"
    },
    {
      yid: "8",
      name: "必胜客",
      address: "深圳市福田区益田路4018号",
      location: "114.055535; 22.532905",
      phone: "0755-56789012",
      status: 0,
      district: "福田区",
      city: "深圳市",
      province: "广东省",
      businesshour: "周一至周日 10:00-22:00",
      active: 10,
      listings_status: "60%"
    },
    {
      yid: "9",
      name: "麦当劳",
      address: "成都市青羊区人民北路二段20号",
      location: "104.076181; 30.683074",
      phone: "028-23456789",
      status: 0,
      district: "青羊区",
      city: "成都市",
      province: "四川省",
      businesshour: "周一至周五 8:00-21:00；周六、周日 9:00-22:00",
      active: 10,
      listings_status: "60%"
    },
    {
      yid: "10",
      name: "肯德基",
      address: "北京市东城区东华门大街240号",
      location: "116.419874; 39.936835",
      phone: "010-43215678",
      status: 0,
      district: "东城区",
      city: "北京市",
      province: "北京市",
      businesshour: "周一至周日 7:30-23:00",
      active: 10,
      listings_status: "60%"
    },
    {
      yid: "11",
      name: "麦当劳",
      address: "上海市浦东新区陆家嘴环路15号",
      location: "121.507788; 31.240585",
      phone: "021-34567890",
      status: 1,
      district: "浦东新区",
      city: "上海市",
      province: "上海市",
      businesshour: "周一至周日 7:00-23:00",
      active: 20,
      listings_status: "60%"
    },
    {
      yid: "12",
      name: "必胜客",
      address: "广州市越秀区中山五路33号",
      location: "113.266368; 23.128369",
      phone: "020-78901234",
      status: 0,
      district: "越秀区",
      city: "广州市",
      province: "广东省",
      businesshour: "周一至周日 10:00-22:00",
      active: 10,
      listings_status: "60%"
    },
    {
      yid: "13",
      name: "肯德基",
      address: "深圳市南山区蛇口南海大道1055号",
      location: "113.914468; 22.489883",
      phone: "0755-78906543",
      status: 1,
      district: "南山区",
      city: "深圳市",
      province: "广东省",
      businesshour: "周一至周日 8:00-23:00",
      active: 2,
      listings_status: "60%"
    },
    {
      yid: "14",
      name: "星巴克",
      address: "成都市武侯区天府二街218号",
      location: "104.060585; 30.541076",
      phone: "028-76543210",
      status: 0,
      district: "武侯区",
      city: "成都市",
      province: "四川省",
      businesshour: "周一至周日 8:00-22:00",
      active: 2,
      listings_status: "60%"
    },
    {
      yid: "15",
      name: "麦当劳",
      address: "北京市海淀区中关村大街28号",
      location: "116.319642; 39.985799",
      phone: "010-12345678",
      status: 0,
      district: "海淀区",
      city: "北京市",
      province: "北京市",
      businesshour: "周一至周五 7:00-21:00；周六、周日 8:00-22:00",
      active: 1,
      listings_status: "60%"
    },
  ],
};

export const mockPOIItem = {
  yid: 22,
  name: "麦当劳",
  address: "北京市朝阳区建国路88号",
  location: "116.454198; 39.914199",
  phone: "010-65673443",
  status: 0,
  district: "朝阳区",
  city: "北京市",
  province: "北京市",
  businesshour: "周一至周五 8:00-22:00；周六、周日 9:00-22:00",
  active: 10,
  listings_status: "60%"
};

// listing
export const mockGetListingResponse = {
  code: 200,
  data: [
    {
      platform: "Baidu",
      status:1,
      mobile_url: "https://www.baidu.com",
    },
    {
      platform: "Amap",
      status:0,
      mobile_url: "https://www.amap.com",
    },
    {
      platform: "360",
      status:1,
      mobile_url: "https://www.360.com",
    },
    {
      platform: "Tencent",
      status:1,
      mobile_url: "https://www.qq.com",
    }
  ]
};

// home
export const mockGetShowDataResponse = {
  code: 200,
  data: {
    name: {
      process: "80%",
    },
    address: {
      process: "60%",
    },
    phone: {
      process: "40%",
    },
    total: {
      process: "100%",
    },
  },
};

// subuser
export const mockGetSubuserResponse = {
  code: 200,
  data: [
    {
      //  username: string;
      //  password: string;
      //  phone: string;
      //  email: string;
      //  commandId: string;
      username: "test1",
      password: "123456",
      phone: "12345678901",
      email: "foo@bar.com",
    },
    {
      username: "test2",
      password: "123456",
      phone: "12345678901",
      email: " heelo@iefn.com",
    },
    {
      username: "test3",
      password: "123456",
      phone: "12345678901",
      email: "jief@bjiaef.com",
    },
  ],
};

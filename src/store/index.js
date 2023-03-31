import { ref, computed } from "vue";
import { createGlobalState, useStorage } from "@vueuse/core";

const defaultBusinessTime = [
    { label: "周一", checked: false, time: [{ start: "09:00", end: "18:00" }] , picker: 0, isActive: true, t1: false},
    { label: "周二", checked: false, time: [{ start: "09:00", end: "18:00" }] ,
      picker:0,
      isActive: true, t1: false, t2: false
    },
    { label: "周三", checked: false, time: [{ start: "09:00", end: "18:00" }, ] 
    ,picker: 0
      ,isActive: true, t1: false, t2: false
    },
    { label: "周四", checked: false, time: [{ start: "09:00", end: "18:00" }] , picker: 0,
      isActive: true, t1: false, t2: false
    },
    { label: "周五", checked: false, time: [{ start: "09:00", end: "18:00" }] ,picker: 0,
      isActive: true, t1: false, t2: false
    },
    { label: "周六", checked: false, time: [{ start: "09:00", end: "18:00" }] ,picker: 0,
      isActive: true, t1: false, t2: false
    },
    { label: "周日", checked: false, time: [{ start: "09:00", end: "18:00" }] ,picker: 0,
      isActive: true, t1: false, t2: false
    },
  ]
  
export const timePickerReturn = ref('');

export const TIME_37 = ref([
    { label: "周一", checked: false, time: [{ start: "09:00", end: "18:00" }] , picker: 0, isActive: true, t1: false},
    { label: "周二", checked: false, time: [{ start: "09:00", end: "18:00" }] ,
      picker:0,
      isActive: true, t1: false, t2: false
    },
    { label: "周三", checked: false, time: [{ start: "09:00", end: "18:00" }, ] 
    ,picker: 0
      ,isActive: true, t1: false, t2: false
    },
    { label: "周四", checked: false, time: [{ start: "09:00", end: "18:00" }] , picker: 0,
      isActive: true, t1: false, t2: false
    },
    { label: "周五", checked: false, time: [{ start: "09:00", end: "18:00" }] ,picker: 0,
      isActive: true, t1: false, t2: false
    },
    { label: "周六", checked: false, time: [{ start: "09:00", end: "18:00" }] ,picker: 0,
      isActive: true, t1: false, t2: false
    },
    { label: "周日", checked: false, time: [{ start: "09:00", end: "18:00" }] ,picker: 0,
      isActive: true, t1: false, t2: false
    },
  ])

export const TIME_45 = ref([
    { label: "周一", checked: false, time: [{ start: "09:00", end: "18:00" }] , picker: 0, isActive: true, t1: false},
    { label: "周二", checked: false, time: [{ start: "09:00", end: "18:00" }] ,
      picker:0,
      isActive: true, t1: false, t2: false
    },
    { label: "周三", checked: false, time: [{ start: "09:00", end: "18:00" }, ] 
    ,picker: 0
      ,isActive: true, t1: false, t2: false
    },
    { label: "周四", checked: false, time: [{ start: "09:00", end: "18:00" }] , picker: 0,
      isActive: true, t1: false, t2: false
    },
    { label: "周五", checked: false, time: [{ start: "09:00", end: "18:00" }] ,picker: 0,
      isActive: true, t1: false, t2: false
    },
    { label: "周六", checked: false, time: [{ start: "09:00", end: "18:00" }] ,picker: 0,
      isActive: true, t1: false, t2: false
    },
    { label: "周日", checked: false, time: [{ start: "09:00", end: "18:00" }] ,picker: 0,
      isActive: true, t1: false, t2: false
    },
  ])

const defaultItem = {
    name: "",
    address: "",
    lat: "",
    lng: "",
    phone: "",
    country: "",
    province: "",
    city: "",
    district: "",
    businesshour: "",
    specialbusinesshour: "",
    status: 1,
    yid:"",
    businessTime: defaultBusinessTime,
    activePicker: '',
    t1:[],
    t2:[],
  }

export const bTime = ref([
  {
    days: [ "周一", "周二", "周三", "周四", "周五", "周六", "周日"], // 营业日，0 表示星期日，1 表示星期一，以此类推
    startTime: "8:00",
    endTime: "20:00"
  }
])


export const WEEKDAYS = [
  "周一", "周二", "周三", "周四", "周五", "周六", "周日"
]

export const keywords = ref("")

export const singleListing = ref([])

export const useState =   createGlobalState(() => {

  const userInfo = useStorage("userInfo", {})
  const POIList = ref([]);
  const listingList = ref([]);
  const showData = ref({});
  const subuserList = ref([]);

  const currentLocation = ref({
    lat: 39.90923,
    lng: 116.397428,
  })

  const apiKey = "d61054a14279b4089a3b8cb09469eb01"

  const currentItem = ref(defaultItem)

  return { userInfo, POIList, listingList, showData,  subuserList,  currentLocation, apiKey,  currentItem };
});

export const {
  userInfo, POIList, listingList, showData,  subuserList, currentItem
} = useState();


export const updateUserInfo = (data) => {
    userInfo.value = {...userInfo.value,...data};
  }


export const updatePOIList = (list) => {
    POIList.value = list;
  }

export  const updatePOIItem = (item) => {
    // 找到对应的POI，如果没有就添加， 如果有就更新
    const index = POIList.value.findIndex((POI) => {
      return item.yid == POI.yid; // adpoded return statement
    });
    if (index == -1) {
      POIList.value.push(item);
    } else {
      POIList.value[index] = item;
    }
  };

export const findPOIItem = ({yid}) => {
  return POIList.value.find((item) => 
    item.yid == yid
  )
}
export const updateListing = (item) => {
    // 找到对应的listing，如果没有就添加， 如果有就更新
    const index = listingList.value.findIndex((listing) => {
      return listing.yid == item.yid; // added return statement
    });
    if (index == -1) {
      listingList.value.push(item);
    } else {
      listingList.value[index] = item;
    }
  };

export const findListing = ({ yid }) => {
    return listingList.value.find((item) => item.yid == yid) || {};
  };


export const updateSubuserList = (list) => {
    subuserList.value = list;
  }


export const clearAll = () => {
    userInfo.value = {};
    POIList.value = [];
    listingList.value = [];
    showData.value = {};
    subuserList.value = [];
  };

export const bindUpdatePOIItem = ({yid}) => {
  const origin = currentItem.value
  const res  = findPOIItem({yid})
  const [lat, lng] = res.location.split(";")
  currentItem.value = {...origin,...res, lat, lng};
}

export const bindCreatePOIItem = () =>{
  currentItem.value = deepCopy(defaultItem);
}

export const findSingleListing = ({yid, item}) => {
  singleListing.value = findListing({yid})
  singleListing.value = {...singleListing.value, ...item}
}

function deepCopy(obj){
  return JSON.parse(JSON.stringify(obj))
}

export const times = ref([
]);

export const newTime = ref({
  weekday:computed(
    ()=>{
      let choosed = []
      for(let item of times.value){
        choosed = [...choosed, item.weekday]
      }
      return [0,1,2,3,4,5,6].filter(item=>!choosed.includes(item))
    }
  ),
  isChecked:[false, false, false, false, false,false, false],
  isDisable:[false, false, false, false, false,false, false],
  time:[]
})



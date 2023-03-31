import {ref} from "vue"
export function useCurrentLocation() {
  
  const latitude = ref(39.9042);
  const longitude = ref(116.4074);
  
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
           latitude.value = position.coords.latitude;
           longitude.value = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  }).catch((error) => {
    console.error(error);
  });
}

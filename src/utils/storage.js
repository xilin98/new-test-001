export const setItem = (key, value) => {
  
  try {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const getItem = (key) => {
  try {
    const data = window.localStorage.getItem(key);
    return JSON.parse(data);
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const removeItem = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};

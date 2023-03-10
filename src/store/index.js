import { createStore } from "vuex";
import { getItem, setItem } from "../utils/storage";
const TOKEN_KEY = "__TOKEN__KEY";
const store = createStore({
  state: {
    user: getItem(TOKEN_KEY),
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
      setItem(TOKEN_KEY, state.user);
    },
  },
});
export default store;

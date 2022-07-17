import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { MyInfoList, MyOperationList, MyFront } from "@/api/index.js";

const store = createStore({
  state() {
    return {
      dark: false,
      LoadingStatus: false,
      opeartiondata: [],
      frontworks: [],
    }
  },
  getters:{
    dark: (state) => state.dark
  },
  mutations: {
    SET_DARK: (state, bool) => {
      state.dark = bool;
    },
    startSpinner(state){
      state.LoadingStatus = true;
    },
    endSpinner(state){
      state.LoadingStatus = false;
    },
    SET_INFO(state, payload) {
      state.datas = payload;
    },
    SET_OPERATION(state, payload) {
      state.opeartiondata = payload;
    },
    SET_MYFRONT(state, payload) {
      state.frontworks = payload;
    },
  },
  actions:{
    toggleDarkMode({ commit }, payload){
        commit('SET_DARK', payload)
    },
    FETCH_INFO(context) {
      MyInfoList()
        .then(res => {
          context.commit("SET_INFO", res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    FETCH_OPERATION(context) {
      MyOperationList()
        .then(res => {
          context.commit("SET_OPERATION", res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    FECTH_MYFRONT(context) {
      MyFront()
        .then(res => {
          context.commit("SET_MYFRONT", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  plugins: [createPersistedState()],
})

export default store
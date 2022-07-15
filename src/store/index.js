import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      dark: false
    }
  },
  getters:{
    dark: (state) => state.dark
  },
  mutations: {
    SET_DARK: (state, bool) => {
      state.dark = bool;
    }
  },
  actions:{
    toggleDarkMode({ commit }, payload){
        commit('SET_DARK', payload)
    }
  },
  plugins: [createPersistedState()],
})

export default store
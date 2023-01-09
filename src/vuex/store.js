import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isUserLogin: false,
  userId: "hyuna",
  userPw: "hyuna",
};

const mutations = {
  SET_IS_USER_LOGIN: (state, payload) => {
    state.isUserLogin = payload;
  },
};

const getters = {
  GET_IS_USER_LOGIN(state) {
    return state.isUserLogin;
  },

  GET_USER_PW(state) {
    return state.userPw;
  },

  GET_USER_ID(state) {
    return state.userId;
  },
};

const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});

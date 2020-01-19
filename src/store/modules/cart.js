import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getters = {
  selectedPack: state => state.selectedPack,
};

const mutations = {
  // eslint-disable-next-line no-param-reassign
  selectPack: (state, pack) => { state.selectPack = pack; },
};

const state = {
  selectedPack: null,
};

const actions = {
  selectPack: (context, selectPack) => {
    context.commit('selectPack', selectPack);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

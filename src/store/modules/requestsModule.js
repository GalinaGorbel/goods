import axios from 'axios';

let url = 'http://localhost:3000';

export default {
  namespaced: true,
  state() {
    return {
      goods: [],
      added: false,
      sorting: null
    };
  },
  mutations: {
    added(state, payload) {
      state.goods.push(payload);
      state.added = true;
      setTimeout(() => {
        state.added = false;
      }, 1000);
    },
    goods(state, payload) {
      state.goods = payload;
    },
    sorting(state, payload) {
      state.sorting = payload;
    },
    sort(state) {
      switch (state.sorting) {
        case 'max':
          return state.goods.sort((a, b) => Number(b.price) - Number(a.price));
        case 'min':
          return state.goods.sort((a, b) => Number(a.price) - Number(b.price));
        case 'name':
          return state.goods.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          );
      }
    }
  },
  actions: {
    async addGood(context, payload) {
      try {
        await axios.post(`${url}/goods/`, payload);
        context.commit('added', payload);
        context.commit('sort');
      } catch (e) {
        console.log(e);
      }
    },
    async loadGoods({ commit }) {
      console.log('load...');
      try {
        const response = await axios.get(`${url}/goods`);
        commit('goods', response.data);
      } catch (e) {
        console.error(e);
      }
    },
    async deleteGood(context, payload) {
      const id = payload;
      try {
        await axios.delete(`${url}/goods/${id}`);
      } catch (e) {
        console.error(e);
      }
    }
  },
  getters: {
    goods(state) {
      return state.goods;
    },
    added(state) {
      return state.added;
    }
  }
};

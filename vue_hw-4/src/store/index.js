import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      paymentsLists: [],
      categoryList: [],
      infoPage: [],
      fff: []
   },
   mutations: {
      setPaymentsListData(state, payload) {
         state.paymentsLists = payload;
      },
      setCategoryList(state, payload) {
         if (!Array.isArray(payload)) {
            state.categoryList.push(...[payload])
         } else state.categoryList.push(...payload)
      },
      setInfoPage(state, key) {
         state.infoPage = key;
      },
      addInfoPage(state, key) {
         let thisPage = `page${Object.keys(state.paymentsLists).length}`; // данная страница
         key.id = (state.paymentsLists[thisPage][state.paymentsLists[thisPage].length - 1].id + 1)// id на одну единицу больше предыдущего
         console.log(state.paymentsLists);
         if (state.paymentsLists[thisPage]) {
            let thisPage = `page${Object.keys(state.paymentsLists).length}`; // данная страница
            let nextPage = `page${Object.keys(state.paymentsLists).length + 1}`; // Следующая страница
            key.id = (state.paymentsLists[thisPage][state.paymentsLists[thisPage].length - 1].id + 1)// id на одну единицу больше предыдущего
            if (state.paymentsLists[thisPage].length < 3) {
               state.paymentsLists[thisPage].push(key);
            } else if (state.paymentsLists[thisPage].length == 3) {
               state.infoPage = [key]
               state.paymentsLists[nextPage] = [key];
            }
         }
      },
   },
   getters: {
      getPaymentsValue: state => state.paymentsLists,
      getCategoryList: state => state.categoryList,
      getInfoPage: state => state.infoPage,
   },
   actions: {
      async fetchData({ commit }, key) {
         const response = await fetch('https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/vueGB.json')
         const res = await response.json()
         // запускаем изменение состояния через commit
         commit('setInfoPage', res[key]);
         commit('setPaymentsListData', res)

      },
      fetchCategory({ commit }) {
         return fetch('https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/vueGB2.json')
            .then(response => response.json())
            .then(res => {
               commit('setCategoryList', res)
            })
      }
   }
})

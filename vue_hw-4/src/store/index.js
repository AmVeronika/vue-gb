import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      paymentsLists: [],
      categoryList: [],
      infoPage: []
   },
   mutations: {
      setPaymentsListData(state, payload) {
         state.paymentsLists = payload
      },
      setCategoryList(state, payload) {
         if (!Array.isArray(payload)) {
            state.categoryList.push(...[payload])
         } else state.categoryList.push(...payload)
      },
      setInfoPage(state, payload) {
         state.infoPage = payload
      },
      addInfoPage(state, key) {
         // console.log(key);
         let a = `page${Object.keys(state.paymentsLists).length + 1}`;
         let b = `page${Object.keys(state.paymentsLists).length}`;

         console.log(b + '= b, a = ' + a);
         if (state.paymentsLists[b].length == 3) {
            state.paymentsLists[a] = [key];
            state.infoPage = key
         } else if (state.paymentsLists[b].length < 3) {
            state.paymentsLists[b].push(key);
            state.infoPage.push(key)
            console.log(state.paymentsLists);
         } else console.log('иначе');
         // state.infoPage.push(...payload)
      },
   },
   getters: {
      getPaymentsValue: state => state.paymentsLists,
      getCategoryList: state => state.categoryList,
      getInfoPage: state => state.infoPage
   },
   actions: {
      fetchData({ commit }) {
         return fetch('https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/vueGB.json')
            .then(response => response.json())
            .then(res => {
               // запускаем изменение состояния через commit
               commit('setPaymentsListData', res)
            })
      },
      fetchCategory({ commit }) {
         return fetch('https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/vueGB2.json')
            .then(response => response.json())
            .then(res => {
               commit('setCategoryList', res)
            })
      },
      fetchInfoPage({ commit }, key) {
         return fetch('https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/vueGB.json')
            .then(response => response.json())
            .then(res => {
               // запускаем изменение состояния через commit
               commit('setInfoPage', res[key])
            })
      }
   }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      paymentsLists: [],//массив массивов с объектами
      categoryList: [],//Массив с категориями
      currentPage: 1, //Текущая страница
   },
   mutations: {
      setPaymentsListData(state, payload) {
         const pagesName = Object.keys(payload).sort(); // ["Page1", "page2", "Page3"]
         state.paymentsLists = pagesName.map((pageName) => {
            return payload[pageName]
         });
         state.currentPage = Object.keys(payload).length;
      },
      setCategoryList(state, payload) {
         if (!Array.isArray(payload)) {
            state.categoryList.push(...[payload])
         } else state.categoryList.push(...payload)
      },
      addInfoPage(state, item) {
         let lastPagewithItems = state.paymentsLists[state.paymentsLists.length - 1];
         let quontItemsOnTheLastPage = lastPagewithItems.length;
         if (item) {
            if (quontItemsOnTheLastPage < 3) { // Если меньше 3 элементов отображается на странице
               lastPagewithItems.push(item)
            } else if (quontItemsOnTheLastPage == 3) {
               state.paymentsLists.push([item]);
               state.currentPage = state.paymentsLists.length
            }
         }
      },
   },
   getters: {
      getInfoPage: state => state.paymentsLists, // Передача страницы для отображения
   },
   actions: {
      async fetchData({ commit }) {
         const response = await fetch('https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/vueGB.json')
         const res = await response.json()
         // запускаем изменение состояния через commit
         commit('setPaymentsListData', res);
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

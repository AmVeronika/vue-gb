import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      paymentsLists: [],//массив массивов с объектами
      categoryList: [],//Массив с категориями
      currentPage: 1 //Текущая страница
   },
   mutations: {
      setPaymentsListData(state, payload) {
         const pagesName = Object.keys(payload).sort(); // ["Page1", "page2, "Page3"]
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
         let lastPagewithItems = state.paymentsLists[state.paymentsLists.length - 1]
         let quontItemsOnTheLastPage = lastPagewithItems.length
         if (quontItemsOnTheLastPage < 3) { // Если меньше 3 элементов отображается на странице
            lastPagewithItems.push(item)
         } else if (quontItemsOnTheLastPage == 3) {
            console.log(state.paymentsLists.length+1);
            state.currentPage =  ++state.currentPage
            state.paymentsLists.push([item]);
         }
      },
      setCurrentPage(state, page) { // Передаём индес state.paymentsList + 1
         state.currentPage = +page
      }
   },
   getters: {
      getPaymentsValue: state => state.paymentsLists,
      getCategoryList: state => state.categoryList,
      getInfoPage: state => state.paymentsLists[state.currentPage - 1], // Передача страницы для отображения
      getCurrentPageage: state => state.currentPage, // крайняя страница
   },
   actions: {
      async fetchData({ commit }) {
         const response = await fetch('https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/vueGB.json')
         const res = await response.json()
         // запускаем изменение состояния через commit
         commit('setPaymentsListData', res);
         commit('setCurrentPage', Object.keys(res).length)

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

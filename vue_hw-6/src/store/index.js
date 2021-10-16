import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      paymentsLists: [],//массив массивов с объектами
      categoryList: [],//Массив с категориями
      currentPage: 1, //Текущая страница
      bool: false,// Открытие/Скрытие поля формы для заполнения платежей
   },
   mutations: {
      setPaymentsListData(state, payload) {
         const pagesName = Object.keys(payload).sort(); // ["Page1", "page2", "Page3"]
         state.paymentsLists = pagesName.map((pageName) => {
            return payload[pageName]
         });
         state.currentPage = Object.keys(payload).length;
      },
      deletePaymentsListData(state, payload) { //Удаление строчки с покупкой
         let arrObj = [];
         let arrOne;
         let arrTwo;
         state.paymentsLists.forEach(el => {
            return arrObj.push(el.indexOf(payload))
         })
         arrOne = arrObj.findIndex(el => el >= 0);//индекс массива, в котором массив с объектом
         arrTwo = state.paymentsLists[arrOne].findIndex(el => el == payload);//Индекс объекта в массиве, который удаляют
         state.paymentsLists[arrOne].splice(arrTwo, 1);//Удаление строки
         state.paymentsLists.forEach((item, ind) => {
            if (item.length == 0) {// Если 0 элементов на странице, удалить пустой массив из массива массивов {
               state.paymentsLists.splice(ind, 1)
            }
            if (item.length == 2 && state.paymentsLists[++arrOne]) {
               item.push(...state.paymentsLists[++ind].splice(0, 1));
            }
         })
      },
      setCategoryList(state, payload) {
         if (!Array.isArray(payload)) {
            state.categoryList.push(...[payload])
         } else state.categoryList.push(...payload)
      },
      addInfoPage(state, payload) {
         let lastPagewithItems = state.paymentsLists[state.paymentsLists.length - 1]; // Крайний массив(страница) с объектами(строчками)
         let quantItemsOnTheLastPage = lastPagewithItems.length; // Длина крайнего массива
         if (payload.old) {
            let IndexWithElem = state.paymentsLists[payload.page].findIndex(el => el.date == payload.old.date && el.category == payload.old.category && el.value == payload.old.value); // индекс соответсвия вводимых данных с теми, что надо отредактировать 
            state.paymentsLists[payload.page].splice(IndexWithElem, 1, payload.info)// И переписываем данные 
         }
         else {
            // let IndexWithElemNew
            // state.paymentsLists.forEach(i => {
            //    IndexWithElemNew = i.findIndex(el => el.date == payload.info.date && el.category == payload.info.category && el.value == payload.info.value); // индекс соответсвия вводимых данных с новыми (-1 если совпадений нет и >= 0 - индекс совпадения)
            // })
            //    if (IndexWithElemNew == -1) {
            if (quantItemsOnTheLastPage < 3) { // Если меньше 3 элементов отображается на странице
               lastPagewithItems.push(payload.info)
               //}
            } else if (quantItemsOnTheLastPage == 3) {
               state.paymentsLists.push([payload.info]);
            }
         }
      },
      changeOfBoolValue(state) {
         state.bool = !state.bool
      },
      openBoolValue(state) {
         if (state.bool == true) {
            return
         } else state.bool = true
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

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      paymentsLists: [],
      categoryList: [],
      sizeItem: 3,
      start: 0,
      end: 5,
      infoPage: ''
   },
   mutations: {
      setPaymentsListData(state, payload) {
         if (!Array.isArray(payload)) {
            state.paymentsLists = [payload]
         } else state.paymentsLists = payload
      },
      addDataToPaymentsList(state, payload) {
         state.paymentsLists.unshift(payload)
      },
      setCategoryList(state, payload) {
         if (!Array.isArray(payload)) {
            state.categoryList.push(...[payload])
         } else state.categoryList.push(...payload)
      },
      setNewPaymentsListData(state) {
         state.paymentsLists.slice(state.start, state.end)
      },
      setPaginatedData(state, key) {
         // this.$emit("getPaymentsValue", key);
         // this.paymentsList.slice(start, end); 
         state.start = key * state.sizeItem,
            state.end = state.start + state.sizeItem
      },
      setInfoPage(state, key) {
         state.infoPage = '',
         state.infoPage = key
      }
   },
   getters: {
      getPaymentsValue: state => state.paymentsLists,
      getCategoryList: state => state.categoryList,
      getSizeItem: state => state.sizeItem,
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
      }
   }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      paymentsLists: []
   },
   mutations: {
      setPaymentsListData(state, payload) {
         state.paymentsLists = payload
      },
      addDataToPaymentsList(state, payload) {
         state.paymentsLists.unshift(payload)
      }
   },
   getters: {
      getPaymentsValue: state => state.paymentsLists,
   },
   actions: {
      fetchData({ commit }) {
         return fetch('https://raw.githubusercontent.com/AmVeronika/JSON-EBT/master/vueGB.json')
            .then(response => response.json())
            .then(res => {
               // запускаем изменение состояния через commit
               commit('setPaymentsListData', res)
            })
      }
   }
})
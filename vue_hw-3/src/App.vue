<template>
  <div id="app">
    <h1>My personal costs</h1>
    <addCosts @openCloseInput="btnClickInput"></addCosts>
    <dataInput @mySendData="dataAdded" v-if="bool"></dataInput>
    <paymentsList :items="paymentsList"></paymentsList>
    <pages :items="paymentsList"></pages>
  </div>
</template>

<script>
import addCosts from "./components/addCosts.vue";
import dataInput from "./components/dataInput.vue";
import paymentsList from "./components/paymentsList.vue";
import pages from "./components/pages.vue";

export default {
  name: "App",
  components: {
    addCosts,
    dataInput,
    paymentsList,
    pages,
  },
  data() {
    return {
      bool: true,
      paymentsList: [
        {
          date: "2021-08-01",
          category: "unicorn",
          price: 1000000,
        },
        {
          date: "2021-08-07",
          category: "nothing",
          price: 1,
        },
        {
          date: "2021-08-12",
          category: "pharmacy",
          price: 50000,
        },
        {
          date: "2021-08-14",
          category: "fuel",
          price: 5000,
        },
        {
          date: "2021-08-15",
          category: "cosmetics",
          price: 8600,
        },
        {
          date: "2021-08-19",
          category: "food",
          price: 1700,
        },
        {
          date: "2021-08-23",
          category: "food",
          price: 700,
        },
        {
          date: "2021-08-26",
          category: "food",
          price: 2600,
        },
        {
          date: "2021-08-31",
          category: "furniture",
          price: 28400,
        },
        {
          date: "2021-09-02",
          category: "furniture",
          price: 28400,
        },
        {
          date: "2021-09-09",
          category: "food",
          price: 1510,
        },
        {
          date: "2021-09-10",
          category: "clothes",
          price: 5620,
        },
      ],
    };
  },
  methods: {
    dataAdded(data) {
      this.paymentsList.push(data);
    },
    btnClickInput(bool) {
      this.bool = bool;
    },
  },
};
</script>
<style scoped>
#app {
  margin: 0 auto;
  width: 500px;
}
</style>

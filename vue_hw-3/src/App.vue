<template>
  <div id="app">
    <h1>My personal costs</h1>
    <addCosts></addCosts>
    <dataInput @MySendData="dataAdded"></dataInput>
    <paymentsList :items="paymentsList"></paymentsList>
  </div>
</template>

<script>
import addCosts from "./components/addCosts.vue";
import dataInput from "./components/dataInput.vue";
import paymentsList from "./components/paymentsList.vue";

export default {
  name: "App",
  components: {
    addCosts,
    dataInput,
    paymentsList,
  },
  data() {
    return {
      paymentsList: [
        {
          date: "01-08-2021",
          category: "unicorn",
          price: 1000000,
        },
        {
          date: "12-08-2021",
          category: "nothing",
          price: 1,
        },
        {
          date: "07-08-2021",
          category: "pharmacy",
          price: 50000,
        },
        {
          date: "14-08-2021",
          category: "fuel",
          price: 5000,
        },
        {
          date: "15-08-2021",
          category: "cosmetics",
          price: 8600,
        },
        {
          date: "19-08-2021",
          category: "food",
          price: 1700,
        },
        {
          date: "23-08-2021",
          category: "food",
          price: 700,
        },
        {
          date: "26-08-2021",
          category: "food",
          price: 2600,
        },
        {
          date: "31-08-2021",
          category: "furniture",
          price: 28400,
        },
        {
          date: "02-09-2021",
          category: "furniture",
          price: 28400,
        },
        {
          date: "09-09-2021",
          category: "food",
          price: 1510,
        },
        {
          date: "10-09-2021",
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
  },
};
</script>
<style scoped>
#app {
  margin: 0 auto;
  width: 500px;
}
</style>

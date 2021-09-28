<template>
  <div id="app">
    <h1>My personal costs</h1>
    <addCosts @openCloseInput="btnClickInput"></addCosts>
    <dataInput v-if="bool"></dataInput>
    <paymentsList></paymentsList>
    <pages></pages>
  </div>
</template>

<script>
import addCosts from "./components/addCosts.vue";
import dataInput from "./components/dataInput.vue";
import paymentsList from "./components/paymentsList.vue";
import pages from "./components/pages.vue";
import { mapMutations, mapActions } from "vuex";

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
      bool: false,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    ...mapActions(["fetchData"]),
    btnClickInput() {
      this.bool = !this.bool;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<style scoped>
#app {
  margin: 0 auto;
  width: 500px;
}
</style>

<template>
  <div class="page-dashboard">
    <h1>My personal costs</h1>
    <button class="add-costs" @click="openClose">add new cost +</button>
    <dataInput v-if="bool"></dataInput>
    <paymentsList></paymentsList>
    <pages></pages>
  </div>
</template>

<script>
import dataInput from "../components/dataInput.vue";
import paymentsList from "../components/paymentsList.vue";
import pages from "../components/pages.vue";
import { mapActions } from "vuex";

export default {
  name: "pageDashboard",
  components: {
    dataInput,
    paymentsList,
    pages,
  },
  data() {
    return {
      bool: false,
    }
  },
  methods: {
    ...mapActions(["fetchData"]),
    openClose() {
      this.bool = !this.bool;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.add-costs {
  background: rgb(28, 151, 114);
  padding: 7px;
  color: white;
}
</style>

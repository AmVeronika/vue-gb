<template>
  <div class="page-dashboard">
    <h1>My personal costs</h1>
    <autoCompleteData/>
    <dataInput ></dataInput>
    <paymentsList></paymentsList>
    <pages></pages>
  </div>
</template>

<script>
import dataInput from "../components/dataInput.vue";
import paymentsList from "../components/paymentsList.vue";
import pages from "../components/pages.vue";
import autoCompleteData from "../components/autoCompleteData.vue";

import { mapActions } from "vuex";

export default {
  name: "pageDashboard",
  components: {
    dataInput,
    paymentsList,
    pages,
    autoCompleteData,
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  created() {
    this.fetchData();
  }
};
</script>



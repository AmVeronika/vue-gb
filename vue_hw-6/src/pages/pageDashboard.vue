<template>
  <div class="page-dashboard">
    <h1>My personal costs</h1>
    <autoCompleteData/>
    <button class="add-costs" @click="bools">add new cost +</button>
    <dataInput v-show="bool" ></dataInput>
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
  data() {
     return {
      bool: false,
     }
  },
  components: {
    dataInput,
    paymentsList,
    pages,
    autoCompleteData,
  },
  methods: {
    ...mapActions(["fetchData"]),
    bools(){
       this.bool = !this.bool
       this.$emit('bools', this.bool)
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
.add-costs {
  background: rgb(28, 151, 114);
  padding: 7px;
  color: white;
}
</style>


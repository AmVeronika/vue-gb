<template>
  <div class="page-dashboard">
    <h1>My personal costs</h1>
    <button class="add-costs" @click="oppen = !oppen">
      Auto complete data
    </button>
    <br />
    <autoCompleteData v-show="oppen" />
    <button class="add-costs" @click="changeOfBoolValue">Add new cost +</button>
    <dataInput v-show="bool"></dataInput>
    <paymentsList></paymentsList>
    <pages></pages>
  </div>
</template>

<script>
import dataInput from "../components/dataInput.vue";
import paymentsList from "../components/paymentsList.vue";
import pages from "../components/pages.vue";
import autoCompleteData from "../components/autoCompleteData.vue";

import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "pageDashboard",
  data() {
    return {
      oppen: false,
    };
  },
  components: {
    dataInput,
    paymentsList,
    pages,
    autoCompleteData,
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["changeOfBoolValue"]),
  },
  computed: {
    ...mapState(["bool"]),
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.page-dashboard {
  position: relative;
}
.add-costs {
  background: rgb(28, 151, 114);
  padding: 7px;
  color: white;
  margin-bottom: 10px;
}
</style>


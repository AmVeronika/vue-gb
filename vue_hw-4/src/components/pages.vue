<template>
  <div class="btn-pages">
    <button class="btn-page" @click="setInfoPage(getPaymentsValue[min])" v-for="(m, min) in getPaymentsValue" :key="min"> {{ min }}</button> 
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "pages",
  methods: {
    ...mapMutations(["setInfoPage"]),
  }, 
  computed: {
    ...mapGetters(["getPaymentsValue"]),
  }
};
</script>
<style scoped>
.btn-pages {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.btn-page {
  padding: 10px;
  width: 70px;
}
</style>

<template>
  <div class="btn-pages">
    <button class="btn-page" @click="setCurrentPage(page +1)"  v-for="(m, page) in getPaymentsValue" :key="page"> 
       {{ page +1 }}</button> 
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "pages",
  methods: {
    ...mapMutations(["setCurrentPage"]),
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

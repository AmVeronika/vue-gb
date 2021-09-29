<template>
  <div class="btn-pages">
    <button class="btn-page" v-for="(m, min) in getPaymentsValue[0]" :key="min"> {{ mim }}</button> 
     <!-- @click="paginatedData(m)" -->
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "pages",
  methods: {
    ...mapMutations(["setPaginatedData", "setInfoPage"]),
    paginatedData(key) {
      this.setInfoPage(key)
      console.log(this.setInfoPage);
      this.setPaginatedData(key); // Передача данных о нажатой кнопке со страницей
      // this.paymentsList.slice(start, end);
    },
  },
  computed: {
    ...mapGetters(["getPaymentsValue", "getSizeItem", "getInfoPage"]),
    pageCount() {
      // кол-во кнопок в зависимости от кол-ва элементов
      let l = this.getPaymentsValue.length,
        s = this.getSizeItem;
      return Math.ceil(l / s);
    },
  },
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

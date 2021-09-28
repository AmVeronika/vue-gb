<template>
  <div class="btn-pages">
    <button
      class="btn-page"
      @click="paginatedData(ind)"
      v-for="(i, ind) in pageCount"
      :key="ind"
    >
      {{ i }}
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "pages",
  methods: {
     ...mapMutations(["setPaginatedData"]),
    paginatedData(key) {
      this.setPaginatedData(key);
      // this.paymentsList.slice(start, end);
    },
  },
  computed: {
    ...mapGetters(["getPaymentsValue", "getSizeItem"]),
    pageCount() {
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
}
</style>

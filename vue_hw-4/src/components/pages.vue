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
import { mapGetters } from "vuex";

export default {
  name: "pages",
  props: {
    sizeItem: Number,
  },
  methods: {
    paginatedData(key) {
      return this.$emit("getPaymentsValue", key);
      // this.paymentsList.slice(start, end);
    },
  },
  computed: {
    ...mapGetters(["getPaymentsValue"]),
    pageCount() {
      let l = this.getPaymentsValue.length,
        s = this.sizeItem;
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

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
export default {
  name: "pages",
  props: {
    items: Array,
    sizeItem: Number,
  },
  methods: {
    paginatedData(key) {
      return this.$emit("paginatedData", key);
      // this.paymentsList.slice(start, end);
    },
  },
  computed: {
    pageCount() {
      let l = this.items.length,
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

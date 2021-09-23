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
  },
  data() {
    return {
      pageNumber: 0,
      sizeItem: 3,
    };
  },
  methods: {
    paginatedData(key) {
      const start = key * this.sizeItem,
        end = start + this.sizeItem;
      return this.$emit("paginatedData", start, end);
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

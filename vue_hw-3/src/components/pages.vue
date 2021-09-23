<template>
  <div class="btn-pages">
    <button class="btn-page" v-for="(i, ind) in items" :key="ind">1</button>
  </div>
</template>

<script>
export default {
  name: "pages",
  props: {
    items: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.btn-pages {
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.btn-page {
padding: 10px;
}
</style>

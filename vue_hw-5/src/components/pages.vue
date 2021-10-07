<template>
  <div class="btn-pages">
    <router-link
      :to="'/dashboard/' + (page + 1)"
      class="btn-page"
      :class="[activePage == page + 1 ? 'btn-page-active' : '']"
      v-for="(m, page) in paymentsLists"
      :key="page"
    >
      {{ page + 1 }}
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "pages",
  methods: {},
  computed: {
    ...mapState(["paymentsLists"]),
    activePage() {
      return this.$route.params.page;
    },
  },
  created() {
     this.$route.params.page = this.paymentsLists.length
  },
};
</script>
<style scoped>
.btn-pages {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  text-align: center;
}
.btn-page {
  padding: 10px;
  width: 70px;
}
.btn-page-active {
  background: rgb(68, 28, 28);
  color: azure;
}
</style>

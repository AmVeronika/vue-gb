<template>
  <div class="btn-pages">
    <router-link
      :to="'/dashboard/' + (page + 1)"
      class="btn-page"
      :class="{ active: activePage == page + 1 }"
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
      // номер ссылки в зависимости от страницы(номер эллемента в массиве)
      return this.$route.params.page;
    },
  },
  updated() {
     console.log(this.paymentsLists.length);
       
    if (this.$route.params.page > this.paymentsLists.length) {
      this.$router.replace({ path: `/dashboard/${this.paymentsLists.length}` });
    }
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
.router-link-active {
  background: rgb(68, 28, 28);
  color: azure;
}
</style>

<template>
  <v-container class="d-flex justify-center" >
    <v-btn
      :to="'/dashboard/' + (page + 1)"
      :class="{ active: activePage == page + 1 }"
      v-for="(m, page) in paymentsLists"
      :key="page"
    >
      {{ page + 1 }}
    </v-btn>
  </v-container>
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
    if (this.$route.params.page > this.paymentsLists.length) {
      this.$router.replace({ path: `/dashboard/${this.paymentsLists.length}` });
    }
  },
};
</script>
<style scoped>
</style>

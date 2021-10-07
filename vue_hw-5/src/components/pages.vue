<template>
  <div class="btn-pages">
    <button
      class="btn-page" :class="[currentPage == page + 1 ? 'btn-page-active' : '' ]"
      @click="setCurrentPage(page + 1)"
      v-for="(m, page) in paymentsLists"
      :key="page"
    >
      {{ page + 1 }}
    </button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "pages",
  methods: {
    ...mapMutations(["setCurrentPage"]), 
    aa(page) {
       console.log(page);
       if (page == this.currentPage) {
          console.log(this.currentPage);

       }
    }
  }, 
  computed: {
    ...mapState([ "paymentsLists", "currentPage"])
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
.btn-page-active {
  background: rgb(68, 28, 28);
  color: azure;
}
</style>

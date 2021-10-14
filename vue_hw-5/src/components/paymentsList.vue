<template>
  <div class="payments-list">
    <ul class="payments-ul">
      <ul class="payments-list-title">
        <li class="item item-title">#</li>
        <li class="item item-title">Date</li>
        <li class="item item-title">Category</li>
        <li class="item item-title">Value</li>
      </ul>
      <ul
        class="payments-list-punkt"
        v-for="(i, ind) in getCurrData"
        :key="ind"
      >
        <li class="item item-value">{{ currPage * 3 - 2 + ind }}</li>
        <li class="item item-value">{{ i.date }}</li>
        <li class="item item-value">{{ i.category }}</li>
        <li class="item item-value">{{ i.value }}</li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Discount",
  computed: {
    ...mapGetters(["getInfoPage"]),
    currPage() {
      return this.$route.params.page;
    },
    getCurrData() {
      return this.getInfoPage[this.currPage - 1];
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
};
</script>

<style scoped>
.payments-ul {
  padding-left: 0px;
  height: 150px;
}
.payments-list-title,
.payments-list-punkt {
  display: flex;
  list-style-type: none;
  padding-left: 0;
  row-gap: 20px;
  justify-content: space-between;
}
.item {
  padding: 5px;
}
.item-title,
.item-value {
  width: 100%;
  font-weight: 700;
  border: 1px solid black;
}
.item-value {
  font-weight: 500;
}
</style>

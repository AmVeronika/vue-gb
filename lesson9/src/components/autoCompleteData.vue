<template>
  <div class="auto-complete-data">
    <h2 class="auto-complete-data__h2">Автозаполнение</h2>
    <div class="d-flex justify-space-between flex-column">
      <v-btn to="/add/payment/food?value=200" class=" mb-1" @click="openBoolValue"
        >Food с ценой 200</v-btn
      >
      <v-btn to="/add/payment/unicorn?value=50" class=" mb-1" @click="openBoolValue"
        >Unicorn с ценой 50</v-btn
      >
      <v-btn to="/add/payment/pharmacy?value=2000" class=" mb-1" @click="openBoolValue"
        >Pharmacy с ценой 2000</v-btn
      >
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "autoCompleteData",
  data() {
    return {
      bool: false,
    };
  },
  methods: {
    ...mapMutations(["openBoolValue"]),
  },
};
</script>

<style scoped>
.auto-complete-data {
  position: absolute;
  top: 95px;
  right: 179px;
}
.auto-complete-data__h2 {
  margin-top: 0;
}
</style>
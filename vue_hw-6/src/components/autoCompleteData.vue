<template>
  <div class="auto-complete-data">
    <h2 class="auto-complete-data__h2">Auto-complete data</h2>
    <ul>
      <li @click="openBoolValue">
        <router-link to="/add/payment/food?value=200"
          >Food с ценой 200</router-link
        >
      </li>
      <li @click="openBoolValue">
        <router-link to="/add/payment/unicorn?value=50"
          >Unicorn с ценой 50</router-link
        >
      </li>
      <li @click="openBoolValue">
        <router-link to="/add/payment/pharmacy?value=2000"
          >Pharmacy с ценой 2000</router-link
        >
      </li>
    </ul>
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
  top: 8px;
  right: 4px;
}
.auto-complete-data__h2 {
  margin-top: 0;
}
</style>
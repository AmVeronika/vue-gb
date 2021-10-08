<template>
  <div>
    <h2>Auto-complete data</h2>
    <ul>
      <li>
        <router-link to="/add/payment/food?value=200"
          >Food с ценой 200</router-link
        >
      </li>
      <li>
        <router-link to="/add/payment/unicorn?value=50"
          >Unicorn с ценой 50</router-link
        >
      </li>
      <li>
        <router-link to="/add/payment/pharmacy?value=2000"
          >Pharmacy с ценой 2000</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "autoCompleteData",
};
</script>

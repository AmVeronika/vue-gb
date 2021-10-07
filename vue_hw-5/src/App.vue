<template>
  <div id="app">
    <div class="links">
      <router-link class="link-rout" to="/home">Home</router-link>
      <router-link class="link-rout" to="/dashboard">Costs</router-link>
      <router-link class="link-rout" to="/hello">Hello</router-link>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    username() {
      // Мы скоро разберём что такое `params`
      return this.$route.params.username;
    },
  },
};
</script>
<style scoped>
#app {
  margin: 0 auto;
  width: 500px;
}
.link-rout {
  color: blue;
  font-weight: 700;
  font-size: 50px;
  text-decoration: none;
  cursor: pointer;
}
.link-rout:hover {
  color: rgb(91, 91, 195);
}
.link-rout:active {
  cursor: grabbing;
}
.links {
   display: flex;
   justify-content: space-between;
}
</style>

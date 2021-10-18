<template>
  <v-app>
      <v-app-bar app absolute fixed class="purple accent-2 mr-n16">
        <v-btn class="purple accent-4 mr-5" outlined to="/home">Home</v-btn>
        <v-btn class="purple accent-4 mr-5" outlined to="/dashboard"
          >Costs</v-btn
        >
        <v-btn class="purple accent-4 mr-5" outlined to="/hello">Hello</v-btn>
      </v-app-bar>

    <v-main app class="purple lighten-4" max-width="88%">
      <v-expand-x-transition>
        <v-container align-center>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </v-container>
      </v-expand-x-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      expand: false,
    };
  },
};
</script>

<style scoped>
</style>
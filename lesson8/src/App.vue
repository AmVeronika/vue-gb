<template>
  <v-app >
    <v-app-bar app absolute fixed class="purple accent-2">
      <v-btn class="purple accent-4 mr-5" outlined to="/home"  @click="expand = !expand">Home</v-btn>
      <v-btn class="purple accent-4 mr-5" outlined to="/dashboard"  @click="expand = !expand">Costs</v-btn>
      <v-btn class="purple accent-4 mr-5" outlined to="/hello"  @click="expand = !expand">Hello</v-btn>
    </v-app-bar>
     
      <v-main app class="purple lighten-4">
       <v-expand-x-transition>  
          <v-container class="" align-center v-show="expand">
         <keep-alive>
            <router-view></router-view>
         </keep-alive>
         </v-container>   </v-expand-x-transition>
      </v-main>
  
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
     return {
         expand: true,
     }
  }
};
</script>

<style scoped>
</style>
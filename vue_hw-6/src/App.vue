<template>
  <div id="app">
    <div class="links">
      <router-link class="link-rout" to="/home">Home / </router-link>
      <router-link class="link-rout" to="/dashboard">Costs / </router-link>
      <router-link class="link-rout" to="/hello">Hello</router-link>
    </div>
    <main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>
    <ModalWindow v-if="modalWindowName" :settings="settings" />
  </div>
</template>

<script>
import ModalWindow from "./pages/ModalWindow.vue"; //------ !!!!!!!!!!!-------------

export default {
  name: "App",
  data() {
    return {
      modalWindowName: "", //------ !!!!!!!!!!!-------------
      settings: {}, //------ !!!!!!!!!!!-------------
    };
  },
  components: {
    ModalWindow,
  },
  methods: {
    onShow({ settings }) {
      //------ !!!!!!!!!!!-------------
      this.modalWindowName = settings.compName;
      this.settings = settings;
    },
    onHide() {
      //------ !!!!!!!!!!!-------------
      this.modalWindowName = "";
      this.settings = {};
    },
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
    beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
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

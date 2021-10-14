<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo2.png" />
    <Calc />
    <TestComponent :message="message"></TestComponent>
  </div>
</template>

<script>
import Calc from "./components/Calc.vue";
import TestComponent from "../tests/unit/TestComponent.vue";

export default {
  name: "App",
  data() {
    return {
      message: "new test text",
    };
  },
  components: {
    Calc,
    TestComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <h1>This text does not contain any logical meaning </h1>
    <h3 class="color">{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  props: {
     message: String
  },
  methods: {
  },
};
</script>
<style scoped>
.color {
   color: red
}
</style>
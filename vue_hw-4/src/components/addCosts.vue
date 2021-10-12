<template>
  <div>
    <button class="add-costs" @click="openClose">add new cost +</button>
  </div>
</template>

<script>
export default {
  name: "addCosts",
  data() {
    return {
    };
  },
  methods: {
    openClose() {
      this.$emit("openCloseInput");
    },
  },
};
</script>
<style scoped>
.add-costs {
  background: rgb(28, 151, 114);
  padding: 7px;
  color: white;
}
</style>

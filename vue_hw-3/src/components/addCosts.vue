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
      ok: true,
    };
  },
  methods: {
    openClose() {
      let noOk = (this.ok = !this.ok);
      this.$emit("openCloseInput", noOk);
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

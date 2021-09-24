<template>
  <div class="inputs">
    <input v-model="date" class="data-input" placeholder="date" type="date" required/>
    <input v-model="category" class="data-input" placeholder="category" type="text" required />
    <input v-model.number="price" class="data-input" placeholder="price" type="number" required />
    <button @click="clickSendData" class="data-input-but">send</button>
  </div>
</template>

<script>
export default {
  name: "dataInput",
  data() {
    return {
      date: "",
      category: "",
      price: null,
    };
  },
  props: {
    items: Array
  },
  methods: {
    clickSendData () {
      const { date, category, price } = this
      this.$emit('mySendData', { date, category, price })
    }
  },
};
</script>
<style scoped>
.inputs {
  margin-top: 25px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  justify-content: space-between;
}
.data-input {
  width: 130px;
}
.data-input-but {
  padding: 2px 10px;
}
</style>

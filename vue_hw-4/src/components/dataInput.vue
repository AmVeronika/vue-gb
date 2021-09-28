<template>
  <div class="inputs">
    <input v-model="date" class="data-input" placeholder="date" type="date" required />
    <select v-model="category" class="data-input" name="category" id="" required >
      <option v-for="(i, ind) in backCatalog" :key="ind" value="">{{ i }}</option>
    </select>
    <input v-model.number="price" class="data-input" placeholder="price" type="number" value="100" required />
    <button @click="clickSendData" class="data-input-but">send</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "dataInput",
  data() {
    return {
      date: "",
      category: "",
      price: null,
    };
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
     backCatalog(){
       return this.getCategoryList
    }
  },
  methods: {
    ...mapMutations(["addDataToPaymentsList"]),
    ...mapActions(["fetchCategory"]),
    clickSendData() {
      let info = {
        date: this.date,
        category: this.category,
        price: this.price,
      };
      this.addDataToPaymentsList(info);
    },
   
  },
  mounted() {
    this.fetchCategory();
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

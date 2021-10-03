<template>
  <div class="inputs">
    <input v-model="date" class="data-input" placeholder="date" type="date" required />
    <select v-model="selected" class="data-input" name="category" required >
      <option :value="opt" v-for="(opt, ind) in backCatalog" :key="ind">{{ opt }} </option>
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
      selected: 'pharmacy',
    };
  },
  computed: {
    ...mapGetters(["getCategoryList", "getPaymentsValue", "getCurrentPage"]),
    backCatalog(){
      return this.getCategoryList // получение списика категории в селект
    }
  },
  methods: {
    ...mapMutations(["addDataToPaymentsList", "addInfoPage"]),
    ...mapActions(["fetchCategory"]),
    clickSendData() { //передача формы данных 
    let lastPageCont = this.getPaymentsValue[this.getPaymentsValue.length -1];
    let lastItemId = lastPageCont[lastPageCont.length-1].id // id предыдущего значения
      let info = {
        id: lastItemId +1, 
        date: this.date,
        category: this.selected,
        value: this.price,
      };
      this.addInfoPage(info); // загрузка в массив
    },
    
  },
  mounted() {
    this.fetchCategory(); // запрос на получение списика категории в селект
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

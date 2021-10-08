<template>
  <div class="oppo">
    <button class="add-costs" @click="changeBool">add new cost +</button>
    <div class="inputs" v-show="bool">
      <input
        v-model="date"
        class="data-input"
        placeholder="date"
        type="date"
        required
      />
      <select v-model="category" class="data-input" name="category" required>
        <option :value="opt" v-for="(opt, ind) in categoryList" :key="ind">
          {{ opt }}
        </option>
      </select>
      <input
        v-model.number="price"
        class="data-input"
        placeholder="price"
        type="number"
        value="100"
        required
      />
      <button @click="clickSendData" class="data-input-but">send</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "dataInput",
  data() {
    return {
      date: "",
      category: "",
      price: null,
    };
  },
  watch: {
    $route(to) {
      // способ отслеживания изменения роутинга
      this.category = to.params.category;
      this.price = to.query.value;
    },
  },
  computed: {
    ...mapState(["paymentsLists", "categoryList", "bool"]),
  },
  methods: {
    ...mapMutations(["addInfoPage", "changeBool"]),
    ...mapActions(["fetchCategory"]),
    clickSendData() {
      //передача формы данных
      if (this.category && this.price) {
        if (!this.date) { //Если дата не указана, поставить текущий день
          const today = new Date();
          let dateToday = today.getDate()
          if(dateToday <10) { // Привожу к общему виду
             dateToday = `0${dateToday}`
          }
          const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+dateToday;
          this.date = date;
        }
        let lastPageCont = this.paymentsLists[this.paymentsLists.length - 1];
        let lastItemId = lastPageCont[lastPageCont.length - 1].id; // id предыдущего значения
        let info = {
          id: lastItemId + 1,
          date: this.date,
          category: this.category,
          value: this.price,
        };
        this.addInfoPage(info); // загрузка в массив
      }
    },
  },
  mounted() {
    this.fetchCategory(); // запрос на получение списика категории в селект
  },
};
</script>
<style scoped>
.oppo {
  display: flex;
  flex-direction: column;
}
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
.add-costs {
  background: rgb(28, 151, 114);
  padding: 7px;
  color: white;
}
</style>

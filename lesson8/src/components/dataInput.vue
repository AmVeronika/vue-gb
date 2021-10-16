<template>
  <div class="oppo">
    <div class="inputs">
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
      oldIndexWithEl: null, //Данные при нажатии на кнопку редактировать
      page: null,
    };
  },
  watch: {
    $route(to) {
      // способ отслеживания изменения роутинга
      if (to.name == "autoDataPay") {
        this.category = to.params.category;
        this.price = to.query.value;
        this.$router
          .push({ path: `/dashboard/${this.currentPage}` })
          .catch(() => {});
      } else if (to.name == "editDataPay") {
        this.date = to.params.component.date;
        this.category = to.params.component.category;
        this.price = to.params.component.value;
        this.oldIndexWithEl = to.params.component;
        this.$router.push({ path: `${to.params.url}` }).catch(() => {});
      }
    },
  },
  computed: {
    ...mapState(["paymentsLists", "categoryList", "currentPage"]),
  },
  methods: {
    ...mapMutations(["addInfoPage"]),
    ...mapActions(["fetchCategory"]),
    clickSendData() {
      //передача формы данных
      if (this.category && this.price) {
        if (!this.date) {
          //Если дата не указана, поставить текущий день
          const today = new Date();
          let dateToday = today.getDate();
          if (dateToday < 10) {
            // Привожу к общему виду
            dateToday = `0${dateToday}`;
          }
          const date =
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            dateToday;
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
        let payload = {
          info: info,
          page: this.$route.params.page - 1,
          old: this.oldIndexWithEl,
        };
        this.$router
         //  .push({ path: `/dashboard/${this.paymentsLists.length}` })
         //  .catch(() => {});
        this.addInfoPage(payload); // загрузка в массив
        this.oldIndexWithEl = null;
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
  background: #fff;
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
</style>

<script>
import { mapGetters } from "vuex";
import { Pie } from "vue-chartjs";

export default {
  name: "Diagram",
  extends: Pie,
  data() {
    return {
      globalArrCategory: [], // общее количество категорий, которые добавлены пользователем(повторяющие тоже)
      quantityCategory: {}, // Список категорий без повторений
      keysCategory: [], // Массив названий категорий
      valueCategory: [], // Массив количества раз использования каждой из категорий
    };
  },
  computed: {
    ...mapGetters(["getInfoPage"]),
  },
  watch: {
    "$store.getters.getInfoPage"() {
      // this.$data._chart.update();
      this.arrPages();
      this.countCaterory();
      this.getKeysValueCategory();
      this.chartOptions();
    },
  },
  methods: {
    arrPages() {
      this.globalArrCategory = [];
      // перебираем массив с массивами
      this.getInfoPage.forEach((element) => {
        // перебираем массивы с объектами в массиве
        element.forEach((el) => {
          // создаём массив в который пушим в найденных объектах значения с ключем category
          this.globalArrCategory.push(el.category);
        });
      });
    },
    countCaterory() {
       this.quantityCategory = {}
      // Перебираем массив со всеми повторяющимися категориями
      this.globalArrCategory.forEach((item) => {
        // Если категрия повторялась, то прибавляем ей значение повтора,
        //Объект с названием категории и количеством повтора
        this.quantityCategory[item] = (this.quantityCategory[item] || 0) + 1;
      });
    },
    getKeysValueCategory() {
      // Массив с категориями без повтора, используем в отражении диаграммы
      this.keysCategory = Object.keys(this.quantityCategory); // Массив с количеством каждой категории без повтора, используем в отражении диаграммы
      this.valueCategory = Object.values(this.quantityCategory);
    },
    chartOptions() {
      this.renderChart({
        labels: this.keysCategory,
        datasets: [
          {
            label: "# of Votes",
            data: this.valueCategory,
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    },
  },
};
</script>

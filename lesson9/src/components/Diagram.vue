<script>
import { mapGetters, mapState } from "vuex";
import { Pie } from "vue-chartjs";

export default {
  name: "Diagram",
  extends: Pie,
  data() {
    return {
      arrCategory: [],
      getCategoryList: []
    };
  },
  computed: {
    ...mapGetters(["getInfoPage"]),
      ...mapState(["categoryList"]),
  },
  watch: {
    "$store.getters.getInfoPage"() {
      this.$data._chart.update();
      this.arrPages();
      this.getCategoryList = this.categoryList
    },
    "$store..getInfoPage"
  },
  methods: {
    arrPages() {
      this.getInfoPage.forEach((element) => {
        element.forEach((el) => {
          this.arrCategory.push(el.category);
        });
      });
      console.log(this.arrCategory);
    },
  },
  mounted() {
    this.renderChart({
      labels: this.getCategoryList,
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3, 4],
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
};
</script>

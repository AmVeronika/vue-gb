<script>
import { mapGetters } from "vuex";
import { Pie } from "vue-chartjs";

export default {
  name: "Diagram",
  props: ["chartData", "options"],
  extends: Pie,

  computed: {
    ...mapGetters(["getInfoPage"]),
  },
  methods: {
    arrPages(arr) {
      let arrCategory = [];
      arr.forEach((element) => {
        element.forEach((el) => {
          arrCategory.push(el.category);
        });
      });
      console.log(arrCategory);
    },
  },
  async mounted() {
    const arrPageCategory = await this.getInfoPage;
    this.arrPages(arrPageCategory),
      this.renderChart({
        labels: this.getInfoPage,
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2],
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

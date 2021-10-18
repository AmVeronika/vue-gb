<template>
  <v-container>
    <v-alert outlined shaped class="orange darken-2">
      <v-alert outlined>
        <v-row class="orange darken-4">
          <v-col class="font-weight-bold text-h6">#</v-col>
          <v-col class="font-weight-bold text-h6">Date</v-col>
          <v-col class="font-weight-bold text-h6">Category</v-col>
          <v-col class="font-weight-bold text-h6">Value</v-col>
        </v-row></v-alert
      >
      <v-alert outlined>
        <v-row class="" v-for="(i, ind) in getCurrData" :key="ind">
          <v-col class="text-lg-h6">{{ currPage * 3 - 2 + ind }}</v-col>
          <v-col class="text-lg-h6">{{ i.date }}</v-col>
          <v-col class="text-lg-h6">{{ i.category }}</v-col>

          <v-col class="text-lg-h6 d-flex justify-space-between">
            {{ i.value }}
            <v-btn
              class="font-weight-black text-h5"
              @click="showModalWindow(i)"
            >
              ...
            </v-btn>
            <v-scroll-x-transition leave-absolute>
              <v-card v-show="modalWindowId === i.id">
                <ModalWindow :settings="settings" />
              </v-card>
            </v-scroll-x-transition>
          </v-col>
        </v-row>
      </v-alert>
    </v-alert>
    <div v-for="(m, mind) in getInfoPage" :key="mind">
       
       <p v-for="(l, lind) in m" :key="lind"> {{l.category}}</p>
    </div>
  </v-container>
</template>

<script>
import ModalWindow from "../pages/ModalWindow.vue"; //------ !!!!!!!!!!!-------------
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Discount",
  data() {
    return {
      modalWindowName: "", //------ !!!!!!!!!!!-------------
      modalWindowId: null,
      settings: {}, //------ !!!!!!!!!!!-------------
      flagModalW: false,
    }
  },
  components: {
    ModalWindow,
  },
  computed: {
    ...mapGetters(["getInfoPage"]),
    currPage() {
      return this.$route.params.page;
    },
    getCurrData() {
      return this.getInfoPage[this.currPage - 1];
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    onShow({ settings }) {
      //------ !!!!!!!!!!!-------------
      this.modalWindowName = settings.compName;
      this.modalWindowId = settings.id;
      this.settings = settings;
    },
    onHide() {
      //------ !!!!!!!!!!!-------------
      this.modalWindowName = "";
      this.modalWindowId = null;
      this.settings = {};
    },
    showModalWindow(obj) {
      //------ !!!!!!!!!!!-------------
      this.flagModalW = !this.flagModalW;
        this.$modal.show("PaymentRevision", {
          compName: "PaymentRevision",
          id: obj.id,
          settings: obj,
        });
    },
  },
  mounted() {
    //------ !!!!!!!!!!!-------------
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    //------ !!!!!!!!!!!-------------
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
};
</script>

<style scoped>
</style>

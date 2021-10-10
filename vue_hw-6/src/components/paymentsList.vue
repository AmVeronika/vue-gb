<template>
  <div class="payments-list">
    <ul class="payments-ul">
      <ul class="payments-list-title">
        <li class="item item-title">#</li>
        <li class="item item-title">Date</li>
        <li class="item item-title">Category</li>
        <li class="item item-title">Value</li>
      </ul>
      <ul
        class="payments-list-punkt"
        v-for="(i, ind) in getCurrData"
        :key="ind"
      >
        <li class="item item-value">{{ currPage * 3 - 2 + ind }}</li>
        <li class="item item-value">{{ i.date }}</li>
        <li class="item item-value">{{ i.category }}</li>
        <li class="item item-value">
          {{ i.value }}
          <button class="payments-list__btn" @click="showModalWindow">
            ...      <ModalWindow v-if="modalWindowName" :settings="settings" />
          </button>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import ModalWindow from "../pages/ModalWindow.vue"; //------ !!!!!!!!!!!-------------
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Discount",
    data() {
    return {
      modalWindowName: '', //------ !!!!!!!!!!!-------------
      settings: {}, //------ !!!!!!!!!!!-------------
    };
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
     onShow( {settings} ) {      //------ !!!!!!!!!!!-------------
      this.modalWindowName = settings.compName;
      this.settings = settings;
      console.log(this.settings);
    },
    onHide() {      //------ !!!!!!!!!!!-------------
      this.modalWindoName = "";
      this.settings = {};
    },

    showModalWindow() {      //------ !!!!!!!!!!!-------------
      this.$modal.show("paymentrevision", { compName: 'PaymentRevision'});
    },
  },
    mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },

};
</script>

<style scoped>
.payments-ul {
  padding-left: 0px;
  height: 150px;
}
.payments-list-title,
.payments-list-punkt {
  display: flex;
  list-style-type: none;
  padding-left: 0;
  row-gap: 20px;
  justify-content: space-between;
}
.item {
  padding: 5px;
}
.item-title,
.item-value {
  width: 100%;
  font-weight: 700;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.item-value {
  font-weight: 500;
}
.payments-list__btn {
  height: 100%;
  background: rgb(193, 246, 221);
  position: relative;
}
</style>

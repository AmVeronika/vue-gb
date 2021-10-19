<template>
  <v-container>
    <div class="rounded-xl amber lighten-1 pa-10 page-dash-board-pos">
      <h1 class="text-h2 font-weight-black mb-10">Мои личные расходы</h1>
      <v-btn
        class="text-h5 font-weight-medium mb-10 purple--text"
        text
        @click="oppen = !oppen"
      >
        Популярные расходы
      </v-btn>
      <br />
      <autoCompleteData v-show="oppen" />
      <v-btn
        class="text-h5 font-weight-medium mb-5 purple--text"
        text
        @click="changeOfBoolValue"
      >
        Добавить новые расходы +
      </v-btn>
      <dataInput v-show="bool"></dataInput>
      <paymentsList></paymentsList>
      <pages></pages>
    </div>
    <v-navigation-drawer
      app
      permanent
      expand-on-hover
      right
      class="d-flex align-center transparent pt-16 mt-16"
      width="400px"
      ><Diargamm class="pt-16 mt-16"/>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import dataInput from "../components/dataInput.vue";
import paymentsList from "../components/paymentsList.vue";
import pages from "../components/pages.vue";
import autoCompleteData from "../components/autoCompleteData.vue";
import Diargamm from "../components/Diagram.vue";

import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "pageDashboard",
  data() {
    return {
      oppen: false,
    };
  },
  components: {
    dataInput,
    paymentsList,
    pages,
    autoCompleteData,
    Diargamm,
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["changeOfBoolValue"]),
  },
  computed: {
    ...mapState(["bool"]),
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.page-dash-board-pos {
  position: relative;
}
</style>


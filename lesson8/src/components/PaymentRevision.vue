<template>
  <div class="paymentrevision">
    <v-btn class=" pr-2" :settings="settings" @click="editDataUser"> Edit </v-btn>
    <v-btn :settings="settings" @click="deleteDataUser"> Delete </v-btn>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "PaymentRevision",
  data() {
    return {
      modalWindowName: "",
    };
  },
  props: {
    settings: {
      type: Object,
    },
  },
  computed: {
    ...mapState(["paymentsLists"]),
  },
  methods: {
    ...mapMutations(["openBoolValue", "deletePaymentsListData",]),
    editDataUser() {
      this.$router.push({ name: "editDataPay", params: { component: this.settings.settings, url: this.$route.fullPath }});
      this.openBoolValue();
      this.$modal.hide();
    },
    deleteDataUser() {
      this.deletePaymentsListData(this.settings.settings)
      
         //   
      this.$modal.hide();
    },
  },
};
</script>

<template>
  <div class="modal-window">
    <div class="modal-window__content">
      <component :is="settings.compName"></component>
      <!-- <button class="modal-window__btn" @click="onCloseModalWindow">
        Close
      </button> -->
    </div>
  </div>
</template>

<script>
import PaymentRevision from "../components/PaymentRevision.vue";
import dataInput from "../components/dataInput.vue";

export default {
  name: "ModalWindow",
  components: {
    PaymentRevision,
    dataInput,
  },
  props: {
    settings: {
      type: Object,
    },
  },
  methods: {
   //  onCloseModalWindow() {
   //    this.$modal.hide();
   //  },
  },
};
</script>
<style scoped>
.modal-window {
  width: max-content;
  border-radius: 10px;
  border: 1px solid #6491edd4;
}
.modal-window__content {
  width: max-content;
  padding: 15px;
}
.modal-window__btn {
  background: rgb(240, 76, 76);
}
</style>

<template>
  <div class="modal-window pl-2 pr-2 brown lighten-4" @click.stop.prevent>
    <div class="modal-window__content">
      <component :is="settings.compName" :settings="settings"></component>
      <v-btn class="modal-window__btn" x-small @click="onCloseModalWindow">X</v-btn>
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
    onCloseModalWindow() {
      this.$modal.hide();
    },
  },
};
</script>

<style scoped>
.modal-window {
  position: absolute;
  background: rgb(238, 229, 229);

  top: -9px;
  left: -21px;
}
.modal-window__content {
  width: max-content;
  padding: 10px 27px 7px 5px;
  position: relative;
}
.modal-window__btn {
  background: none;
  border: none;
  font-weight: 700;
  position: absolute;
  top: 2px;
  right: -5px;
  cursor: pointer;
}
</style>

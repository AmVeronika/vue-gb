<template>
  <div class="modal-window" @click.stop.prevent>
    <div class="modal-window__content">
      <component :is="settings.compName" :settings="settings"></component>
      <button class="modal-window__btn" @click="onCloseModalWindow">X</button>
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
  width: max-content;
  border: 1px solid #6491edd4;
  position: absolute;
  background: rgb(238, 229, 229);
  z-index: 2;
  top: -5px;
  left: 35px;
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
  top: 3px;
  right: 2px;
  cursor: pointer;
}
</style>

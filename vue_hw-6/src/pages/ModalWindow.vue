<template>
  <div class="modal-window" @click.stop.prevent>
    <div class="modal-window__content">
   <component :is="settings.compName"></component>
    </div>
    <footer class="modal-window__footer">
      <button class="modal-window__btn" @click="onCloseModalWindow()">
        Close
      </button>
    </footer>
  </div>
</template>

<script>
import PaymentRevision from "../components/PaymentRevision.vue";
import PaymentExamination from "../components/PaymentExamination.vue";

export default {
  name: "ModalWindow",
  components: {
    PaymentRevision,
    PaymentExamination,
  },
  props: {
    settings: {
      type: Object
    },
  },
  methods: {
    onCloseModalWindow() {
      this.$modal.hide();
      console.log('hide');
      
    },
  },
};
</script>
<style scoped>
.modal-window {
  width: 100px;
  padding: 15px;
  background: rgb(189, 238, 231);
  position: absolute;
  top: 0;
  left: 26px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid #6491edd4;
}
.modal-window__btn {
  background: rgb(240, 76, 76);
}
</style>

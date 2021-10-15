<template>
  <div class="calc">
    <input
      class="calc__input"
      @input="input = 'left'"
      name="operand1"
      v-model.number="operand1"
      type="number"
    />
    <input
      class="calc__input"
      @input="input = 'right'"
      name="operand2"
      v-model.number="operand2"
      type="number"
    />
    <div>
      <div class="buttons">
        <button
          class="calc__button"
          @click="calculate(operator)"
          v-for="operator in operators"
          :key="operator"
          :name="operator"
        >
          {{ operator }}
        </button>
      </div>
      <div v-show="!error" class="calc__result">{{ result }}</div>
      <div v-show="error" class="calc__result">{{ error }}</div>
    </div>
    <label class="calc__checkbox">
      <input type="checkbox" id="checkbox" v-model="checked" />
      Скрыть/Показать кнопки
    </label>
    <div class="buttons-value" v-show="checked">
      <input type="radio" id="one" value="left" v-model="picked" />
      <label for="one">Первое значение</label>
      <br />
      <input type="radio" id="two" value="right" v-model="picked" />
      <label for="two">Второе значение</label>
    </div>
    <div class="buttons-value" v-show="checked">
      <button
        class="calc__button-v"
        @click="valueTransfer(btn)"
        v-for="btn in buttons"
        :key="btn"
        :name="btn"
      >
        {{ btn }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  data() {
    return {
      operand1: "",
      operand2: "",
      result: "",
      error: "",
      operators: [
        "Сложение",
        "Вычитание",
        "Умножение",
        "Деление",
        "Возведение в степень",
        "Целочисленное деление",
      ],
      checked: true,
      picked: true,
      buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "del"],
      input: "left",
    };
  },
  methods: {
    calculate(operation) {
      this.error = "";
      switch (operation) {
        case "Сложение":
          this.result = +this.operand1 + +this.operand2;
          break;
        case "Вычитание":
          this.result = this.operand1 - this.operand2;
          break;
        case "Умножение":
          this.result = this.operand1 * this.operand2;
          break;
        case "Деление":
          if (this.operand2 === 0) {
            this.error = "Делить на 0 нельзя!";
          } else {
            this.result = this.operand1 / this.operand2;
          }
          this.result = this.operand1 / this.operand2;
          break;
        case "Возведение в степень":
          this.result = this.operand1 ** this.operand2;
          break;
        case "Целочисленное деление":
          if (this.operand2 === 0) {
            this.error = "Делить на 0 нельзя!";
          } else {
            this.result =
              (this.operand1 - (this.operand1 % this.operand2)) / this.operand2;
          }
          break;
      }
    },
    valueTransfer(value) {
      this.result = "";
      if (value !== "del") {
        if (this.picked == "right") {
          if (!this.operand2) {
            this.operand2 = 0;
          }
          this.operand2 = "" + this.operand2;
          this.operand2 = this.operand2 + +value;
          this.operand2 = +this.operand2;
        } else if (this.picked == "left") {
          if (!this.operand1) {
            this.operand1 = 0;
          }
          this.operand1 = "" + this.operand1;
          this.operand1 += +value;
          this.operand1 = +this.operand1;
        } 
      //   else {
      //     this.result = "Вы не выбрали поле";
      //   }
      }
      if (value === "del") {
        if (this.picked == "right") {
          this.operand2 = "" + this.operand2;
          this.operand2 = this.operand2.replace(/\d\b/, "");
          this.operand2 = +this.operand2;
        } else if (this.picked == "left") {
          this.operand1 = "" + this.operand1;
          this.operand1 = this.operand1.replace(/\d\b/, "");
          this.operand1 = +this.operand1;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calc {
  margin: 20px auto;
  width: 485px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.calc__input {
  margin-right: 15px;
  margin-left: 15px;
  border: 2px solid green;
  border-radius: 5px;
}
.calc__checkbox {
  margin: 25px auto;
}
.buttons,
.buttons-value {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 15px;
}
.buttons-value {
  margin: 15px auto;
}
.calc__button {
  background: #41b883;
}
.calc__button-v {
  background: #97c661;
}
.calc__result {
  font-size: 30px;
  margin: 10px auto;
  font-weight: 600;
  height: 30px;
  padding: 15px;
  border: 2px solid #35495e;
  background: #35495e5e;
  color: #35495e;
}
</style>

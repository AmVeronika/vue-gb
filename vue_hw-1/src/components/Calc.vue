<template>
  <div class="calc">
    <input class="calc__input" v-model="operand1" type="number" />
    <input class="calc__input" v-model="operand2" type="number" />
    <div class="buttons">
      <button class="calc__button" @click="calcPlus">Сложение</button>
      <button class="calc__button" @click="calcMinus">Вычитание</button>
      <button class="calc__button" @click="calcMultipl">Умножение</button>
      <button class="calc__button" @click="calcDivision">Деление</button>
      <button class="calc__button" @click="calcExponent">
        Возведение в степень
      </button>
      <button class="calc__button" @click="calcIntegerDivis">
        Целочисленное деление
      </button>
    </div>
    <div class="calc__result">{{ result }}</div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  data() {
    return {
      operand1: 12,
      operand2: 6,
      result: 0,
    };
  },
  methods: {
    calcPlus() {
      this.result = +this.operand1 + +this.operand2;
    },
    calcMinus() {
      this.result = this.operand1 - this.operand2;
    },
    calcMultipl() {
      this.result = this.operand1 * this.operand2;
    },
    calcDivision() {
      this.result = this.operand1 / this.operand2;
    },
    calcExponent() {
      this.result = this.operand1 ** this.operand2;
    },
    calcIntegerDivis() {
      this.result =
        (this.operand1 - (this.operand1 % this.operand2)) / this.operand2;
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
.buttons {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 15px;
}
.calc__button {
  background: #41b883;
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

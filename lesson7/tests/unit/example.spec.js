import { mount } from '@vue/test-utils'
import Calc from '../../src/components/Calc.vue'

//Проверка на число при вводе данных
describe('Calculator input tests', () => {
   it('Test operand1 input value', () => {
      const number = 1;
      const wrapper = mount(Calc);
      const operand1 = wrapper.find('input[name=operand1]');
      operand1.setValue(number);
      expect(wrapper.vm.operand1).toBe(number)
   })
   it('Test operand2 input value', () => {
      const number = 1;
      const wrapper = mount(Calc);
      const operand2 = wrapper.find('input[name=operand2]');
      operand2.setValue(number);
      expect(wrapper.vm.operand2).toBe(number)
   })
});

describe('Calculator operations tests', () => {
   it('Test sum operation', async () => {
      const wrapper = mount(Calc)

      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue(5)

      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue(4)

      const sumOperationButton = wrapper.find('button[name="Сложение"]')
      sumOperationButton.trigger('click')

      expect(wrapper.vm.result).toBe(9)
   });
   it('Test min operation', async () => {
      const wrapper = mount(Calc)

      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue(5)

      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue(4)

      const minOperationButton = wrapper.find('button[name="Вычитание"]')
      minOperationButton.trigger('click')

      expect(wrapper.vm.result).toBe(1)
   });
   it('Test multiply operation', async () => {
      const wrapper = mount(Calc)

      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue(5)

      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue(4)

      const multiplyOperationButton = wrapper.find('button[name="Умножение"]')
      multiplyOperationButton.trigger('click')

      expect(wrapper.vm.result).toBe(20)
   });
   it('Test devide operation', async () => {
      const wrapper = mount(Calc)

      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue(5)

      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue(4)

      const devideOperationButton = wrapper.find('button[name="Деление"]')
      devideOperationButton.trigger('click')

      expect(wrapper.vm.result).toBe(1.25)
   });
   it('Test devide operation by 0', async () => {
      const wrapper = mount(Calc)

      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue(5)

      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue(0)

      const devideOperationButton = wrapper.find('button[name="Деление"]')
      devideOperationButton.trigger('click')

      expect(wrapper.vm.error).toBe('Делить на 0 нельзя!')
   });
   it('Test degree operation', async () => {
      const wrapper = mount(Calc)

      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue(5)

      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue(4)

      const degreeOperationButton = wrapper.find('button[name="Возведение в степень"]')
      degreeOperationButton.trigger('click')

      expect(wrapper.vm.result).toBe(625)
   });
   it('Test integer operation', async () => {
      const wrapper = mount(Calc)
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue(20)
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue(4)
      const integerOperationButton = wrapper.find('button[name="Целочисленное деление"]')
      integerOperationButton.trigger('click')

      expect(wrapper.vm.result).toBe(5)
   });
   it('Test integer operation by 0', async () => {
      const wrapper = mount(Calc)
      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue(5)
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue(0)
      const devideOperationButton = wrapper.find('button[name="Целочисленное деление"]')
      devideOperationButton.trigger('click')

      expect(wrapper.vm.error).toBe('Делить на 0 нельзя!')
   });

})
describe('Calculator screen keyboard tests', () => {
   it('Test operand1 in screen keyboard', async () => {
      const wrapper = mount(Calc)
      const checkPicked = wrapper.find('input[value="left"]')
      checkPicked.trigger('click')
      const sumOperationButton = wrapper.find('button[name="3"]')
      sumOperationButton.trigger('click')
      sumOperationButton.trigger('click')

      expect(wrapper.vm.operand1).toEqual(33)
   });
   it('Test operand2 in screen keyboard', async () => {
      const wrapper = mount(Calc)
      const checkPicked = wrapper.find('input[value="right"]')
      checkPicked.trigger('click')
      const sumOperationButton = wrapper.find('button[name="3"]')
      sumOperationButton.trigger('click')
      sumOperationButton.trigger('click')

      expect(wrapper.vm.operand2).toEqual(33)
   });
   describe('Calculator delete tests', () => {
      it('Test delete operand1 in screen keyboard', async () => {
         const wrapper = mount(Calc)
         const operand1 = wrapper.find('input[name=operand1]')
         operand1.setValue(55)
         const checkPicked = wrapper.find('input[value="left"]')
         checkPicked.trigger('click')
         const sumOperationButton = wrapper.find('button[name="del"]')
         sumOperationButton.trigger('click')

         expect(wrapper.vm.operand1).toEqual(5)
      });
      it('Test delete operand2 in screen keyboard', async () => {
         const wrapper = mount(Calc)
         const operand1 = wrapper.find('input[name=operand2]')
         operand1.setValue(55)
         const checkPicked = wrapper.find('input[value="right"]')
         checkPicked.trigger('click')
         const sumOperationButton = wrapper.find('button[name="del"]')
         sumOperationButton.trigger('click')

         expect(wrapper.vm.operand2).toEqual(5)
      });
   });
})


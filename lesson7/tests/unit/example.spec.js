import { mount} from '@vue/test-utils'
import TestComponent from './TestComponent.vue'

describe('TestComponent', () => {
   it('Content of TestComponent', () => {
      const msg = 'new test text'
      const wrapper = mount (TestComponent, {
         propsData: { msg }
      })
      expect(wrapper.text()).toContain( 'This text does not contain any logical meaning', msg)
   })
})

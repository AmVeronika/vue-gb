import { mount } from '@vue/test-utils'
import TestComponent from './TestComponent.vue'

describe('TestComponent', () => {
   it('Content of TestComponent', () => {
      const msg = 'new test text'
      const wrapper = mount(TestComponent, {
         propsData: { message:  msg}
      })
      expect(wrapper.text()).toContain( msg)
   })
})

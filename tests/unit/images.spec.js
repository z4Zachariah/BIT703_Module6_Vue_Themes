import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Images from '@/views/images.vue'

describe('images.vue', () => {
  it('renders welcome message', () => {
    const welcomeText = 'Latest Images'
    const wrapper = shallowMount(Images, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AddImage from '@/views/addimage.vue'

describe('addimages.vue', () => {
  it('renders welcome message', () => {
    const welcomeText = 'Add An Image'
    const wrapper = shallowMount(AddImage, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})

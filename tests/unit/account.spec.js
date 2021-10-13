import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Account from '@/views/account.vue'

describe('account.vue', () => {
  it('renders welcome message', () => {
    const welcomeText = 'User Login/Registration'
    const wrapper = shallowMount(Account, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ChallengeComp from '@/components/ChallengeComp.vue'

describe('Test ChallangeComp', () => {
  it('ShouldReturnSUMOfNumbers', () => {
    const wrapper = mount(ChallengeComp)
    expect(wrapper.vm.sum(1, 2)).toBe(3)
  })
})

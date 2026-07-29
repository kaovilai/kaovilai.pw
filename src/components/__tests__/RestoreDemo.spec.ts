import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import RestoreDemo from '../RestoreDemo.vue'

describe('RestoreDemo', () => {
  it('renders the simulate disaster button enabled', () => {
    const wrapper = mount(RestoreDemo)
    const btn = wrapper.get('button.disaster-btn')
    expect(btn.text()).toContain('simulate disaster')
    expect(btn.attributes('disabled')).toBeUndefined()
  })

  it('disables the button and glitches the page during a run', async () => {
    vi.useFakeTimers()
    const wrapper = mount(RestoreDemo)
    await wrapper.get('button').trigger('click')
    expect(wrapper.get('button').attributes('disabled')).toBeDefined()
    expect(document.body.classList.contains('disaster')).toBe(true)
    vi.runAllTimers()
    vi.useRealTimers()
    wrapper.unmount()
    expect(document.body.classList.contains('disaster')).toBe(false)
  })
})

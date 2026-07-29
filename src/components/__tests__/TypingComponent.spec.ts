import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TypingComponent from '../TypingComponent.vue'

describe('TypingComponent', () => {
  it('exposes the full text to screen readers immediately', () => {
    const wrapper = mount(TypingComponent, { props: { text: 'Hello World!' } })
    expect(wrapper.find('.sr-only').text()).toBe('Hello World!')
  })

  it('hides the animated span from assistive tech', () => {
    const wrapper = mount(TypingComponent, { props: { text: 'Hi' } })
    expect(wrapper.find('[aria-hidden="true"]').exists()).toBe(true)
  })

  it('types nothing when text is empty', () => {
    const wrapper = mount(TypingComponent, { props: { text: '', once: true } })
    expect(wrapper.find('[aria-hidden="true"]').text()).toBe('')
  })
})

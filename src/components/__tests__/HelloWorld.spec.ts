import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

const mountPage = () =>
  mount(HelloWorld, {
    global: { directives: { reveal: {} } },
  })

describe('HelloWorld', () => {
  it('renders every section with a stable anchor id', () => {
    const wrapper = mountPage()
    for (const id of ['about', 'connect', 'toolbox', 'bucket-list', 'devices', 'projects', 'pay']) {
      expect(wrapper.find(`section#${CSS.escape(id)}`).exists(), `section #${id}`).toBe(true)
    }
  })

  it('mentions current role and Velero maintainership', () => {
    const text = mountPage().text()
    expect(text).toContain('Senior Software Engineer')
    expect(text).toContain('maintainer of Velero')
  })

  it('contains no inline base64 images (regression for #150)', () => {
    const html = mountPage().html()
    expect(html).not.toContain('data:image/png;base64')
  })

  it('lazy-loads the extracted icon images from /icons/', () => {
    const imgs = mountPage().findAll('img[src^="/icons/"]')
    expect(imgs.length).toBeGreaterThanOrEqual(8)
    for (const img of imgs) {
      expect(img.attributes('loading'), img.attributes('src')).toBe('lazy')
    }
  })
})

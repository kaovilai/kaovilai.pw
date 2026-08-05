import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

const mountPage = () =>
  mount(HelloWorld, {
    global: { directives: { reveal: {} } },
  })

describe('HelloWorld', () => {
  it('renders every section with a stable anchor id', () => {
    const wrapper = mountPage()
    for (const id of ['about', 'connect', 'toolbox', 'bucket-list', 'devices', 'projects', 'current-work', 'pay']) {
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

  it('renders one of the rotating ops-command kickers', () => {
    const kicker = mountPage().get('.hero-kicker').text()
    expect(kicker).toMatch(/^\$ (velero|kubectl|ssh|systemctl)/)
  })

  it('boop increments the counter and persists it', async () => {
    localStorage.setItem('boops', '41')
    const wrapper = mountPage()
    await wrapper.get('.hero-photo-btn').trigger('click')
    expect(wrapper.get('.boop-count').text()).toBe('boops: 42')
    expect(localStorage.getItem('boops')).toBe('42')
  })

  it('carries the legacy-site content: degree, wishlist extras, payments, places map', () => {
    const wrapper = mountPage()
    const text = wrapper.text()
    expect(text).toContain('Computer Programming and Industrial Engineering')
    expect(text).toContain('BEV / PHEV')
    expect(text).toContain('Cybertruck')
    expect(wrapper.find('img[src="/about/places-map.png"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/pay/promptpay.jpg"]').exists()).toBe(true)
    expect(wrapper.find('a[href="/pay/truemoney.jpg"]').exists()).toBe(true)
    expect(wrapper.find('a[href="https://m.me/passawit"]').exists()).toBe(true)
    expect(wrapper.find('a[href="https://tig.pw/pay"]').exists()).toBe(true)
    expect(wrapper.find('a[href^="https://enroll.zellepay.com"]').exists()).toBe(true)
  })
})

describe('Currently Working On (activity feed)', () => {
  const activityFixture = {
    period: { start: '2026-07-16', end: '2026-07-30' },
    generatedAt: '2026-07-30T17:58:02Z',
    metrics: { prsMerged: 30, prsOpened: 62, prsReviewed: 80, issuesCommented: 40, issuesClosed: 24 },
    prsMerged: [
      {
        number: 68,
        repo: 'kaovilai/kaovilai',
        org: 'kaovilai',
        title: 'Emit JSON exports alongside markdown reports',
        url: 'https://github.com/kaovilai/kaovilai/pull/68',
      },
    ],
    prsOpened: [
      {
        number: 68,
        repo: 'kaovilai/kaovilai',
        org: 'kaovilai',
        title: 'Emit JSON exports alongside markdown reports',
        url: 'https://github.com/kaovilai/kaovilai/pull/68',
      },
      {
        number: 70,
        repo: 'velero-io/velero',
        org: 'velero-io',
        title: 'Another PR',
        url: 'https://github.com/velero-io/velero/pull/70',
      },
    ],
  }

  it('shows a loading state before the fetch resolves, then renders metrics on success', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(activityFixture),
    } as Response)
    const wrapper = mountPage()
    expect(wrapper.get('.activity-status').text()).toBe('fetching activity feed…')
    await flushPromises()
    expect(wrapper.find('.activity-status').exists()).toBe(false)
    expect(wrapper.get('.activity-metric-num').text()).toBe('30')
  })

  it('dedupes a PR that is both merged and opened in the period, keeping the merged tag', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(activityFixture),
    } as Response)
    const wrapper = mountPage()
    await flushPromises()
    const items = wrapper.findAll('.activity-item')
    const urls = items.map((item) => item.get('a').attributes('href'))
    expect(new Set(urls).size).toBe(urls.length)
    expect(items[0].get('.activity-tag').text()).toBe('merged')
  })

  it('groups recent contributions by org before listing repos', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(activityFixture),
    } as Response)
    const wrapper = mountPage()
    await flushPromises()
    const orgHeaders = wrapper.findAll('.activity-org').map((n) => n.text())
    expect(orgHeaders).toEqual(['kaovilai', 'velero-io'])
    const repoRows = wrapper.findAll('.activity-item-repo').map((n) => n.text())
    expect(repoRows[0]).toContain('kaovilai/kaovilai#68')
    expect(repoRows[1]).toContain('velero-io/velero#70')
  })

  it('falls back to an offline message when the fetch rejects', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('boom'))
    const wrapper = mountPage()
    await flushPromises()
    expect(wrapper.get('.activity-status').text()).toContain('offline')
  })

  it('falls back to an offline message on a non-OK response', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({ ok: false, status: 404 } as Response)
    const wrapper = mountPage()
    await flushPromises()
    expect(wrapper.get('.activity-status').text()).toContain('offline')
  })
})

import { describe, it, expect, vi, afterEach } from 'vitest'
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

describe('Review Queue panel', () => {
  afterEach(() => {
    // The setup-file fetch is a plain vi.fn (not a spy), so restore the
    // network-disabled default implementation after each URL-based mock.
    vi.mocked(globalThis.fetch).mockImplementation(() => Promise.reject(new Error('network disabled in tests')))
  })

  const openPrsFixture = {
    updatedAt: '2026-08-10T19:03:06Z',
    prs: [],
    reviewQueue: {
      updatedAt: '2026-08-10T19:03:06Z',
      needsReview: [
        {
          number: 10210,
          repo: 'velero-io/velero',
          org: 'velero-io',
          title: 'Fix excluded namespaces tracking',
          url: 'https://github.com/velero-io/velero/pull/10210',
          author: 'kaovilai',
          isCopilotAuthored: false,
          isApproved: false,
          mergeStateStatus: 'BLOCKED',
          reason: 'awaitingReview',
          waitingDays: 12,
        },
        {
          number: 700,
          repo: 'openshift/oadp-operator',
          org: 'openshift',
          title: 'Copilot authored change',
          url: 'https://github.com/openshift/oadp-operator/pull/700',
          author: 'copilot-swe-agent[bot]',
          isCopilotAuthored: true,
          isApproved: false,
          mergeStateStatus: 'BLOCKED',
          reason: 'awaitingReview',
          waitingDays: 0.4,
        },
        {
          number: 111,
          repo: 'kubernetes-sigs/cluster-api',
          org: 'kubernetes-sigs',
          title: 'Catch-all org PR',
          url: 'https://github.com/kubernetes-sigs/cluster-api/pull/111',
          author: 'kaovilai',
          isCopilotAuthored: false,
          isApproved: false,
          mergeStateStatus: 'BLOCKED',
          reason: 'awaitingReview',
          waitingDays: 2,
        },
      ],
      approvedWaitingToLand: [
        {
          number: 9000,
          repo: 'velero-io/velero',
          org: 'velero-io',
          title: 'Approved but held',
          url: 'https://github.com/velero-io/velero/pull/9000',
          author: 'kaovilai',
          isCopilotAuthored: false,
          isApproved: true,
          mergeStateStatus: 'BLOCKED',
          reason: 'hold',
          waitingDays: 3,
        },
      ],
    },
  }

  const mockOpenPrsFetch = (payload: unknown = openPrsFixture) =>
    vi.spyOn(globalThis, 'fetch').mockImplementation((input) => {
      const url = String(input)
      if (url.includes('open-prs.json')) {
        return Promise.resolve({ ok: true, json: () => Promise.resolve(payload) } as Response)
      }
      return Promise.reject(new Error('network disabled in tests'))
    })

  it('shows a loading state, then renders org sections with counts', async () => {
    mockOpenPrsFetch()
    const wrapper = mountPage()
    expect(wrapper.get('.queue-status').text()).toBe('fetching review queue…')
    await flushPromises()
    expect(wrapper.find('.queue-status').exists()).toBe(false)
    const orgHeadings = wrapper.findAll('.queue-org-heading')
    expect(orgHeadings.map((n) => n.get('.queue-org').text())).toEqual(['openshift', 'migtools', 'velero-io', 'others'])
    expect(orgHeadings.map((n) => n.get('.queue-group-count').text())).toEqual(['1', '0', '2', '1'])
    const groupHeadings = wrapper.findAll('.queue-group-heading').map((n) => n.text())
    expect(groupHeadings[0]).toContain('Needs review')
    expect(groupHeadings.some((h) => h.includes('Approved, waiting to land'))).toBe(true)
  })

  it('renders PR rows with approval tags, waiting time, and copilot badge, grouped by org', async () => {
    mockOpenPrsFetch()
    const wrapper = mountPage()
    await flushPromises()
    const items = wrapper.findAll('.queue-item')
    expect(items).toHaveLength(4)
    // openshift section first
    expect(items[0].get('.activity-item-repo').text()).toBe('openshift/oadp-operator#700')
    expect(items[0].find('.queue-copilot').exists()).toBe(true)
    expect(items[0].get('.queue-waiting').text()).toBe('waiting <1d')
    // velero-io section: needs review then approved
    expect(items[1].get('.activity-tag').text()).toBe('review')
    expect(items[1].get('.activity-item-repo').text()).toBe('velero-io/velero#10210')
    expect(items[1].get('.queue-waiting').text()).toBe('waiting 12d')
    expect(items[1].find('.queue-copilot').exists()).toBe(false)
    expect(items[2].get('.activity-tag').text()).toBe('approved')
    expect(items[2].get('a').attributes('href')).toBe('https://github.com/velero-io/velero/pull/9000')
    // catch-all others section
    expect(items[3].get('.activity-item-repo').text()).toBe('kubernetes-sigs/cluster-api#111')
  })

  it('reclassifies approved PRs that have not met required approvals into needs review', async () => {
    mockOpenPrsFetch({
      updatedAt: '2026-08-10T19:03:06Z',
      prs: [],
      reviewQueue: {
        updatedAt: '2026-08-10T19:03:06Z',
        needsReview: [],
        approvedWaitingToLand: [
          {
            number: 2368,
            repo: 'openshift/oadp-operator',
            org: 'openshift',
            title: 'Needs a second approval',
            url: 'https://github.com/openshift/oadp-operator/pull/2368',
            author: 'kaovilai',
            isCopilotAuthored: false,
            isApproved: true,
            reviewDecision: 'REVIEW_REQUIRED',
            approvalCount: 1,
            requiredApprovals: 2,
            mergeStateStatus: 'BLOCKED',
            reason: 'pendingMerge',
            waitingDays: 5,
          },
          {
            number: 9100,
            repo: 'velero-io/velero',
            org: 'velero-io',
            title: 'Fully approved via branch protection',
            url: 'https://github.com/velero-io/velero/pull/9100',
            author: 'kaovilai',
            isCopilotAuthored: false,
            isApproved: true,
            reviewDecision: 'APPROVED',
            approvalCount: 2,
            requiredApprovals: 2,
            mergeStateStatus: 'BLOCKED',
            reason: 'pendingMerge',
            waitingDays: 3,
          },
        ],
      },
    })
    const writeText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { ...navigator, clipboard: { writeText } })
    const wrapper = mountPage()
    await flushPromises()
    const sections = wrapper.findAll('.queue-org-section')
    // openshift PR with 1/2 approvals lands under "Needs review" with the review tag
    const openshiftSection = sections[0]
    expect(openshiftSection.get('.queue-group-heading').text()).toContain('Needs review')
    const openshiftItem = openshiftSection.get('.queue-item')
    expect(openshiftItem.get('.activity-tag').text()).toBe('review')
    expect(openshiftItem.get('.queue-approvals').text()).toBe('1/2 approvals')
    // velero-io PR meeting its branch-protection requirement stays approved
    const veleroSection = sections[2]
    expect(veleroSection.get('.queue-group-heading').text()).toContain('Approved, waiting to land')
    expect(veleroSection.get('.activity-tag').text()).toBe('approved')
    expect(veleroSection.find('.queue-approvals').exists()).toBe(false)
    // copy text includes the approvals indicator for under-approved PRs
    await openshiftSection.get('.queue-copy-btn').trigger('click')
    await flushPromises()
    expect(writeText).toHaveBeenCalledWith(
      [
        'Review queue — openshift (1)',
        'Needs review (1):',
        '- openshift/oadp-operator#2368 Needs a second approval (1/2 approvals, waiting 5d) https://github.com/openshift/oadp-operator/pull/2368',
      ].join('\n'),
    )
    vi.unstubAllGlobals()
  })

  it('copies a scrum-ready summary of an org section to the clipboard', async () => {
    mockOpenPrsFetch()
    const writeText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { ...navigator, clipboard: { writeText } })
    const wrapper = mountPage()
    await flushPromises()
    const veleroSection = wrapper.findAll('.queue-org-section')[2]
    await veleroSection.get('.queue-copy-btn').trigger('click')
    await flushPromises()
    expect(writeText).toHaveBeenCalledWith(
      [
        'Review queue — velero-io (2)',
        'Needs review (1):',
        '- velero-io/velero#10210 Fix excluded namespaces tracking (waiting 12d) https://github.com/velero-io/velero/pull/10210',
        'Approved, waiting to land (1):',
        '- velero-io/velero#9000 Approved but held (waiting 3d) https://github.com/velero-io/velero/pull/9000',
      ].join('\n'),
    )
    expect(veleroSection.get('.queue-copy-btn').text()).toBe('copied ✓')
    vi.unstubAllGlobals()
  })

  it('disables the copy button and shows queue clear for empty org sections', async () => {
    mockOpenPrsFetch({
      updatedAt: '2026-08-10T19:03:06Z',
      prs: [],
      reviewQueue: { updatedAt: '2026-08-10T19:03:06Z', needsReview: [], approvedWaitingToLand: [] },
    })
    const wrapper = mountPage()
    await flushPromises()
    const empties = wrapper.findAll('.queue-empty').map((n) => n.text())
    expect(empties).toEqual(['queue clear', 'queue clear', 'queue clear', 'queue clear'])
    for (const btn of wrapper.findAll('.queue-copy-btn')) {
      expect(btn.attributes('disabled')).toBeDefined()
    }
  })

  it('falls back to an offline message when the fetch rejects', async () => {
    const wrapper = mountPage()
    await flushPromises()
    expect(wrapper.get('.queue-status').text()).toContain('offline')
  })

  it('falls back to an offline message when reviewQueue is missing from the payload', async () => {
    mockOpenPrsFetch({ updatedAt: '2026-08-10T19:03:06Z', prs: [] })
    const wrapper = mountPage()
    await flushPromises()
    expect(wrapper.get('.queue-status').text()).toContain('offline')
  })
})

describe('Recently reviewed panel', () => {
  afterEach(() => {
    vi.mocked(globalThis.fetch).mockImplementation(() => Promise.reject(new Error('network disabled in tests')))
  })

  const reviewedFixture = (prsReviewed: unknown) => ({
    period: { start: '2026-07-16', end: '2026-07-30' },
    generatedAt: '2026-07-30T17:58:02Z',
    metrics: { prsMerged: 30, prsOpened: 62, prsReviewed: 80, issuesCommented: 40, issuesClosed: 24 },
    prsMerged: [],
    prsOpened: [],
    ...(prsReviewed === undefined ? {} : { prsReviewed }),
  })

  const mockActivityFetch = (payload: unknown) =>
    vi.spyOn(globalThis, 'fetch').mockImplementation((input) => {
      const url = String(input)
      if (url.includes('activity.json')) {
        return Promise.resolve({ ok: true, json: () => Promise.resolve(payload) } as Response)
      }
      return Promise.reject(new Error('network disabled in tests'))
    })

  const reviewedPR = (n: number, org: string, repo: string) => ({
    number: n,
    repo,
    org,
    title: `Reviewed PR ${n}`,
    url: `https://github.com/${repo}/pull/${n}`,
  })

  it('groups reviewed PRs by org using the review queue org ordering, deduped by url', async () => {
    mockActivityFetch(
      reviewedFixture([
        reviewedPR(1, 'velero-io', 'velero-io/velero'),
        reviewedPR(2, 'openshift', 'openshift/oadp-operator'),
        reviewedPR(1, 'velero-io', 'velero-io/velero'),
        reviewedPR(3, 'kubernetes-sigs', 'kubernetes-sigs/cluster-api'),
        reviewedPR(4, 'migtools', 'migtools/oadp-non-admin'),
      ]),
    )
    const wrapper = mountPage()
    expect(wrapper.get('.reviewed-status').text()).toBe('fetching reviewed PRs…')
    await flushPromises()
    const section = wrapper.get('.reviewed-section')
    expect(section.findAll('.activity-org').map((n) => n.text())).toEqual([
      'openshift',
      'migtools',
      'velero-io',
      'kubernetes-sigs',
    ])
    const items = section.findAll('.reviewed-item')
    expect(items).toHaveLength(4)
    expect(items[0].get('.activity-item-repo').text()).toBe('openshift/oadp-operator#2')
    expect(items[0].get('.activity-tag').text()).toBe('reviewed')
    expect(items[3].get('a').attributes('href')).toBe('https://github.com/kubernetes-sigs/cluster-api/pull/3')
    expect(section.get('.reviewed-group-heading').text()).toContain('Reviewed Jul 16 – Jul 30')
  })

  it('caps the reviewed list at 24 entries', async () => {
    mockActivityFetch(
      reviewedFixture(Array.from({ length: 40 }, (_, i) => reviewedPR(i + 1, 'velero-io', 'velero-io/velero'))),
    )
    const wrapper = mountPage()
    await flushPromises()
    expect(wrapper.get('.reviewed-section').findAll('.reviewed-item')).toHaveLength(24)
  })

  it('shows a no-recent-reviews fallback when prsReviewed is absent from the payload', async () => {
    mockActivityFetch(reviewedFixture(undefined))
    const wrapper = mountPage()
    await flushPromises()
    const section = wrapper.get('.reviewed-section')
    expect(section.get('.reviewed-empty').text()).toBe('no recent reviews')
    expect(section.findAll('.reviewed-item')).toHaveLength(0)
  })

  it('falls back to an offline message when the activity fetch fails', async () => {
    const wrapper = mountPage()
    await flushPromises()
    expect(wrapper.get('.reviewed-status').text()).toContain('offline')
  })
})

// jsdom lacks matchMedia and IntersectionObserver, which the components
// use for prefers-reduced-motion and scroll effects.
import { vi } from 'vitest'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn(() => [])
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
})

if (!globalThis.localStorage) {
  const store = new Map<string, string>()
  Object.defineProperty(globalThis, 'localStorage', {
    writable: true,
    value: {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, String(v)),
      removeItem: (k: string) => void store.delete(k),
      clear: () => store.clear(),
      key: (i: number) => [...store.keys()][i] ?? null,
      get length() {
        return store.size
      },
    },
  })
}

// Components fetch live data (e.g. the "Currently Working On" activity feed).
// Default to a rejected fetch so specs never hit the real network; individual
// tests override with vi.spyOn(globalThis, 'fetch') for the success path.
Object.defineProperty(globalThis, 'fetch', {
  writable: true,
  value: vi.fn(() => Promise.reject(new Error('network disabled in tests'))),
})

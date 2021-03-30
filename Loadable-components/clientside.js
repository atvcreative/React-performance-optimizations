import { loadableReady } from '@loadable/component'
loadableReady(() => {
  const root = document.getElementById('main')
  hydrate(<App />, root)
})

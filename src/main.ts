import { createApp, type App as VueApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createI18n } from 'vue-i18n'
import VueExampleComponent from '@/components/VueExampleComponent.vue'
import en from '../locales/en/main.json'
import zh from '../locales/zh/main.json'

// @ts-ignore - ComfyUI external module
import { app } from '../../../scripts/app.js'

const vueApps = new Map<number, VueApp>()

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, zh }
})

// @ts-ignore
function createVueWidget(node) {
  const container = document.createElement('div')
  container.id = `vue-basic-widget-${node.id}`
  container.style.width = '100%'
  container.style.height = '100%'
  container.style.minHeight = '400px'
  container.style.display = 'flex'
  container.style.flexDirection = 'column'
  container.style.overflow = 'hidden'

  const widget = node.addDOMWidget(
    'custom_vue_component_basic',
    'vue-basic',
    container,
    {
      getMinHeight: () => 420,
      hideOnZoom: false,
      serialize: true
    }
  )

  const vueApp = createApp(VueExampleComponent, {
    widget,
    node
  })

  vueApp.use(i18n)
  vueApp.use(PrimeVue)

  vueApp.mount(container)
  vueApps.set(node.id, vueApp)

  widget.onRemove = () => {
    const vueApp = vueApps.get(node.id)
    if (vueApp) {
      vueApp.unmount()
      vueApps.delete(node.id)
    }
  }

  return { widget }
}

app.registerExtension({
  name: 'vue-basic',

  settings: [
    {
      id: 'Comfy.Frontend.VueBasic.ExampleSetting',
      category: ['Example', 'VueBasic', 'Example'],
      name: 'Vue Basic Example Setting',
      tooltip: 'An example setting for the Vue Basic extension',
      type: 'boolean',
      defaultValue: true,
      experimental: true
    }
  ],

  getCustomWidgets() {
    return {
      // @ts-ignore
      CUSTOM_VUE_COMPONENT_BASIC(node) {
        return createVueWidget(node)
      }
    }
  },

  // @ts-ignore
  nodeCreated(node) {
    if (node.constructor?.comfyClass !== 'vue-basic') return

    const [oldWidth, oldHeight] = node.size

    node.setSize([Math.max(oldWidth, 300), Math.max(oldHeight, 520)])
  }
})

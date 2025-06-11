import { ComfyApp } from '@comfyorg/comfyui-frontend-types'

import { addWidget, ComponentWidgetImpl } from "../../../scripts/domWidget.js";

import VueExampleComponent from "@/components/VueExampleComponent.vue";

// Declare global ComfyUI objects
declare global {
  interface Window {
    app?: ComfyApp
  }
}

function waitForInit(): Promise<void> {
  return new Promise((resolve) => {
    // Check if document is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkApp)
    } else {
      checkApp()
    }

    // Check if app is available
    function checkApp() {
      if (window.app) {
        resolve()
      } else {
        // Poll for app availability
        const interval = setInterval(() => {
          if (window.app) {
            console.log('App initialized')
            clearInterval(interval)
            resolve()
          }
        }, 50)

        // Set timeout to avoid infinite polling
        setTimeout(() => {
          clearInterval(interval)
          console.error('Timeout waiting for app to initialize')
          resolve() // Continue anyway to avoid blocking
        }, 5000)
      }
    }
  })
}

async function initializeExtension(): Promise<void> {
    try {
        await waitForInit()
        console.log('Vue App:', window.app)

        if (!window.app) {
          console.error('ComfyUI app not available')
          return
        }

        window.app.registerExtension({
            name: 'vue-basic',
            getCustomWidgets(app) {
                return {
                    CUSTOM_VUE_COMPONENT_BASIC(node) {
                        // Add custom vue component here

                        console.log("tttt")

                        const inputSpec = {
                            name: 'custom_vue_component_basic',
                            type: 'vue-basic',
                        }

                        const widget = new ComponentWidgetImpl({
                            node,
                            name: inputSpec.name,
                            component: VueExampleComponent,
                            inputSpec,
                            options: {}
                        })

                        addWidget(node, widget)

                        return {widget}
                    }
                }
            },
            nodeCreated(node) {
                if (node.constructor.comfyClass !== 'vue-basic') return

                const [oldWidth, oldHeight] = node.size

                node.setSize([Math.max(oldWidth, 300), Math.max(oldHeight, 520)])
            }
        });
    }
    catch (error) {
        console.error('Failed to initialize Vue basic Example:', error)
    }
}

void initializeExtension()
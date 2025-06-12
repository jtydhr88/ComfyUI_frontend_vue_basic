import { app } from "../../../scripts/app.js";
import { ComfyApp } from '@comfyorg/comfyui-frontend-types'

import { addWidget, ComponentWidgetImpl } from "../../../scripts/domWidget.js";

import VueExampleComponent from "@/components/VueExampleComponent.vue";

const comfyApp: ComfyApp = app;

comfyApp.registerExtension({
    name: 'vue-basic',
    getCustomWidgets(app) {
        return {
            CUSTOM_VUE_COMPONENT_BASIC(node) {
                // Add custom vue component here

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
import { app } from "../../../scripts/app.js";
import { addWidget, ComponentWidgetImpl } from "../../../scripts/domWidget.js";
import { generateUUID } from "../../../scripts/utils.js";

import VueExampleComponent from "@/components/VueExampleComponent.vue";

app.registerExtension({
    name: 'vue-basic',
    getCustomWidgets(app) {
        return {
            CUSTOM_VUE_COMPONENT_BASIC(node) {
                // Add custom vue component here

                const inputSpec = {
                  name: 'custom_vue_component_basic',
                  type: 'vue-basic'
                }

                const widget = new ComponentWidgetImpl({
                  id: generateUUID(),
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

        console.log(node)
    }
});
<template>
  <div>
    <h1>Vue Basic Example</h1>
    <div>
      <DrawingApp :width="300" :height="300" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import DrawingApp from "./DrawingApp.vue";

  const { widget } = defineProps<{
    widget: ComponentWidget<string[]>
  }>()

  const node = widget.node

  onMounted(() => {
    widget.serializeValue = async (node, index) => {
        console.log("inside vue")
        console.log("node", node)
        console.log("index", index)

        return {
            "terry-test": "!23"
        }
    }
  })
</script>

<style scoped>
</style>
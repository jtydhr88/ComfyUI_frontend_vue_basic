<template>
  <div>
    <h1>Example</h1>
    <div>count: {{ count }}</div>
    <Button class="p-button-rounded p-button-text" @click="remove">
      <i
        v-tooltip.right="{ value: 'this is primevue-test', showDelay: 300 }"
        class="pi pi-expand text-white text-lg"
      />
    </Button>
    <button @click="remove">Remove one</button>
    <div v-if="count > 5">
      > 5
    </div>
    <div v-if="count < 5">
      < 5
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Tooltip } from 'primevue'

  const vTooltip = Tooltip

  const count = ref(10);

  function remove(){
    console.log("removing one");

    if (count.value > 0){
      count.value = count.value - 1;

      console.log(count.value);
    }
  }
</script>

<style scoped>
</style>
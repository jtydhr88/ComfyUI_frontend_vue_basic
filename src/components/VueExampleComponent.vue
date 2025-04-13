<template>
  <div>
    <h1>Example</h1>
    <div>count: {{ count }}</div>
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

  const count = ref(22);

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
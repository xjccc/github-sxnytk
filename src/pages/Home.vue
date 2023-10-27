<template>
  <div>
    result: {{ result }}
    <br />
    error: {{ e }}
    <button @click="getData">fetch</button>
  </div>
</template>

<script setup>
// Reproduction
import { ofetch } from 'ofetch'
import { ref } from 'vue'
const result = ref()
const e = ref()
const getData = async () => {
  try {
    const data = await ofetch('/api/info')
    result.value = data
    console.log(data)
  } catch (error) {
    e.value = error.message
  }
}
</script>

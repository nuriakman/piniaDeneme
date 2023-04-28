<script setup>
import { useProductStore } from '@/stores/depo'
import { storeToRefs } from 'pinia'
const { sayac1, sayac2 } = storeToRefs(useProductStore())
</script>

<template>
  <h1 style="color: red">Değişkenin doğrudan kullanımı:</h1>

  <h2>sayac1++</h2>
  <button @click="sayac1++">sayac1++</button>
  <hr />
  <h2>sayac2++</h2>
  <button @click="sayac2++">sayac2++</button>
  <hr />
  <p>sayac1 : {{ sayac1 }}</p>
  <p>sayac2 : {{ sayac2 }}</p>
</template>

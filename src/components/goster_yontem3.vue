<script setup>
import { useProductStore } from '@/stores/depo'
import { storeToRefs } from 'pinia'
const ProductStore = useProductStore()
const { sayac1, sayac2 } = storeToRefs(ProductStore)
</script>

<template>
  <h1>ProductStore içeriği:</h1>
  <pre>{{ ProductStore }}</pre>

  <h1>ProductStore ile kullanım:</h1>
  <button @click="productStore.sayac1++">productStore.sayac1++</button>

  <h1>sayac2 olarak doğrudan kullanım:</h1>
  <button @click="sayac2++">sayac2++</button>

  <hr />

  <p>Sayac1: {{ sayac1 }}</p>
  <p>Sayac2: {{ productStore.sayac2 }}</p>
</template>

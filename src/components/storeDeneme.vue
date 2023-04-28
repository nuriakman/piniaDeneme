<script setup>
import { useProductStore } from '@/stores/depo'
const productStore = useProductStore()
</script>

<template>
  <pre>productStore: {{ productStore }}</pre>
  <p>Sayac1: {{ productStore.sayac1 }}</p>
  <p>Sayac2: {{ productStore.sayac2 }}</p>
  <button @click="productStore.sayac1++">ARTI</button>
  <button @click="productStore.sayac2++">DİĞERİNİ ARTIR</button>
</template>

<script setup>
import { useProductStore } from '@/stores/depo'
const productStore = useProductStore()
</script>

<template>
  <h1 style="color: red">Değişkenin Store ile kullanımı:</h1>

  <h2>productStore.sayac1++</h2>
  <button @click="productStore.sayac1++">productStore.sayac1++</button>
  <hr />
  <h2>productStore.sayac2++</h2>
  <button @click="productStore.sayac2++">productStore.sayac2++</button>
  <hr />
  <p>productStore.sayac1 : {{ productStore.sayac1 }}</p>
  <p>productStore.sayac2 : {{ productStore.sayac2 }}</p>
  <hr />
  <h2>productStore içeriği:</h2>
  <pre>{{ productStore }}</pre>
  <hr />
  <p>productStore.productCount : {{ productStore.productCount }}</p>
</template>

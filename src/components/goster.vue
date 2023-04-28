<script setup>
import { useProductStore } from '@/stores/depo'
const productStore = useProductStore()
</script>

<template>
  <span v-for="i in 50"
    ><b>{{ i }}:</b> {{ productStore.sayac1 }} - {{ productStore.sayac2 }},
  </span>
  <hr />
  <h1>Ürünler</h1>
  <ol>
    <li v-for="product in productStore.products" :key="product">{{ product }}</li>
  </ol>
</template>

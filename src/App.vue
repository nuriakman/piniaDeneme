<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/Goster1">Goster1</RouterLink> |
    <RouterLink to="/Goster2">Goster2</RouterLink> |
    <RouterLink to="/FetchView">FetchView</RouterLink>
  </nav>
  <RouterView />
</template>

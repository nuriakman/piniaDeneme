<template>
  <h1>This is an FETCH VIEW page</h1>

  <div v-if="store.users.length == 0">
    <h1>Kullanıcılar Yükleniyor...</h1>
  </div>

  <div v-if="store.users.length > 0">
    <h1>Kullanıcılar Listesi</h1>
    <ul>
      <li v-for="user in users">{{ user.name }} @{{ user.username }}</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/depo'
import { storeToRefs } from 'pinia'

const store = useProductStore()
const { users } = storeToRefs(store)
const { fetchUsers } = store

console.log('BAŞLADIK')
onMounted(() => {
  console.log('onMounted()')
  fetchUsers()
  console.log('BİTTİ')
})
console.log('STOP')
</script>

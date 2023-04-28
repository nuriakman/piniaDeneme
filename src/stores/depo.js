import { defineStore } from 'pinia'
// import { axios } from 'axios'
// import axios from 'axios';
export const useProductStore = defineStore('product', {
  state: () => ({
    // State İşlemleri
    products: ['elma', 'armut', 'ayva'],
    sayac1: 1,
    sayac2: 2,
    users: []
  }),

  getters: {
    // Watch İşlemleri
    productCount: (state) => state.products.length
  },

  actions: {
    // Actions are to set business logic like fetch info.
    async fetchUsers() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.users = res.data
        console.log('axios users', this.users)
      } catch (err) {
        console.error('axios users error')
        console.error(err)
      }
    }
  }
})
import axios from 'axios'

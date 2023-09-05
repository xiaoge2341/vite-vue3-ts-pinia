import { defineStore } from 'pinia'
// import {useOtherStore} from './useOtherStore'

const promiseE = (number: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(number), 2000)
  })
}

export const exampleStore = defineStore({
  id: 'example',
  state: () => ({
    // 所有这些属性都将自动推断其类型
    // https://pinia.web3doc.top/core-concepts/state.html
    counter: 2,
    name: 'Eduardo',
    isAdmin: true,

    users: [{ id: 1, name: "111" }, { id: 2, name: "112" }, { id: 3, name: "113" }]
  }),
  getters: {
    doubleCount: (state): number => state.counter * 2,

    doubleCountThis() {
      return this.doubleCount
    },

    getUserById: (state) => {
      // const store = useStore()
      // 使用 <p>User 2: {{ store.getUserById(2) }}</p>
      console.log(state.counter)
      return (userId: any) => state.users.find((user) => user.id === userId)
    },
  },
  actions: {
    increment() {
      this.counter++
    },
    OtherStore() {
      // const otherStore = useOtherStore()
      // otherStore.aa
      // otherStore.add()
    },
    async fetchAction() {
      let res
      try {
        res = await promiseE(333)
      } catch {
      }
    }
  },
  persist:true
})
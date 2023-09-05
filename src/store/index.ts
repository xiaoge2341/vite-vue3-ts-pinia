import { createPinia } from "pinia";
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(createPersistedState({
  storage: sessionStorage,
  // key:{}
}))


export { pinia }
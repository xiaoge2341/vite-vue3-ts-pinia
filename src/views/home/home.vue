<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <hr />

  <button @click="router.push('/news')" >news</button>
  <button @click="router.push('/')" >home</button>
  <button @click="router.push('/home')" >home children</button>
  <br>
  {{ env }}
  <hr>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { useRouter } from 'vue-router'
const env = import.meta.env
const router = useRouter();
const a = 222
</script>

<style lang="less" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
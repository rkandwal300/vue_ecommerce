<script setup lang="ts">
import Header from './components/Header/Header.vue'
import { onBeforeMount } from 'vue'
import ResponsiveHeaderList from './components/Header/ResponsiveHeaderList.vue'

onBeforeMount(() => {
  (window as any)?.electron?.subscribeStatistics((data: any) => console.log(data))
})
</script>

<template>
  <v-app>
    <Header />
    <ResponsiveHeaderList />
    <router-view />
  </v-app>
</template>

<style scoped>
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

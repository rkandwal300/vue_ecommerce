<template>
  <v-navigation-drawer v-model="isHeaderVisible" temporary class="absolute top-0 left-0 p-2" location="left" width="250"
    :scrim="true">

    <div class="sticky top-0  bg-background flex flex-col items-start justify-between gap-2.5">
      <v-icon :size="20" @click="setHeaderVisibility(false)" class="p-0 mt-5 cursor-pointer">
        <RiCloseLine />
      </v-icon>
      <div class="flex items-center gap-2 pl-2.5 pr-3  border-b">
        <input v-model="query" @keyup.enter="handleSearchQuery"
          class="w-full h-9 p-2 font-extralight placeholder:font-extralight placeholder:text-primary outline-none"
          placeholder="Search Products..." />
        <button @click="handleSearchQuery" class="cursor-pointer">
          <RiSearchLine class="w-5 h-5 text-foreground" />
        </button>
        <span class="sr-only">Search</span>
      </div>

    </div>

    <!-- Scrollable nav list -->
    <ul class="overflow-y-auto flex-1 mt-2">
      <li v-for="nav in navList" :key="nav.label">
        <router-link :to="nav.href" class="block px-4 py-2 rounded font-light" :class="currentRoute.path === nav.href
          ? '!bg-secondary !text-primary '
          : ' hover:bg-secondary hover:text-primary '" @click="setHeaderVisibility(false)">
          {{ nav.label }}
        </router-link>
      </li>
    </ul>

  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { RiCloseLine, RiSearchLine } from 'vue-remix-icons';
import { useHeaderStore } from '../../store/header';
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const headerState = useHeaderStore();
const query = ref('');

const currentRoute = useRoute()
const { isHeaderVisible } = storeToRefs(headerState);
const { setHeaderVisibility, navList } = headerState;

const handleSearchQuery = () => {
  if (query.value.trim()) {
    console.log(`Searching for: ${query.value}`);
    setHeaderVisibility(false);
  } else {
    console.log('Search query is empty');
  }
};
</script>

<style scoped>
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px white inset !important;
  -webkit-text-fill-color: inherit !important;
  transition: background-color 5000s ease-in-out 0s;
}
</style>

<template>
    <header class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm ">
        <div
            class="mx-auto  min-h-[50px] px-4  w-full self-center max-w-xl sm:max-w-2xl lg:max-w-7xl flex items-center justify-between">
            <div class="flex items-center gap-5">
                <button icon @click="setHeaderVisibility(!isHeaderVisible)" class="lg:hidden cursor-pointer">
                    <v-img :src="responsiveBar" alt="Open Menu" width="24" height="24" />
                </button>

                <button class="lg:hidden"><img :src="logoResponsive" alt="Shella " width="30" /> <span
                        class="sr-only">Shella</span></button>
                <button class="lg:block hidden"><img :src="logo" alt="Shella" width="70" /> <span
                        class="sr-only">Shella</span></button>
            </div>
            <div class="flex items-center gap-4 ">

                <router-link v-for="page in routesList" :to="page.href"
                    class="p-2 rounded hover:shadow px-auto hover:bg-secondary ">
                    <img :src="page.icon" :alt="page.label" width="30" />
                    <span class="sr-only">{{ page.label }}</span>
                </router-link>
            </div>
        </div>
        <p class="w-full border-b hidden lg:block" />
        <nav class="mx-auto px-6 max-w-7xl w-full hidden lg:flex justify-between">
            <ul class="flex items-center">
                <li v-for="nav in navList" :key="nav.label">
                    <router-link :to="nav.href" class="block px-4 py-2 font-light" :class="currentRoute.path === nav.href
                        ? '!text-muted-foreground'
                        : 'hover:text-muted-foreground'" @click="setHeaderVisibility(false)">
                        {{ nav.label }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup lang="ts">
import logoResponsive from '@/ui/assets/logo/logoResponsive.svg'
import responsiveBar from '@/ui/assets/logo/menuResponsiveIcon.svg'
import logo from '@/ui/assets/logo/logo.svg'
import { useHeaderStore } from '../../store/header'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const currentRoute = useRoute()
const headerState = useHeaderStore();

const { isHeaderVisible } = storeToRefs(headerState);
const { setHeaderVisibility } = headerState;
const { routesList, navList } = headerState;

</script>
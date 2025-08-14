<script setup lang="ts">
import { ROUTES_LIST } from '../../router/routes.enum';
const { name, className } = defineProps<{
    name: string;
    className?: string;
}>();
</script>

<template>
    <div class="container font-light">
        <ul class="flex flex-wrap items-center md:items-start gap-1 text-xs" :class="className">
            <li><router-link :to="ROUTES_LIST.HOME">Home</router-link></li>
            <li><span>/</span></li>
            <li><span>{{ name }}</span></li>
        </ul>
    </div>
</template>
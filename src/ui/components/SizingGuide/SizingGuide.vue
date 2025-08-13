<template>
    <section class="page">
        <div class="container">
            <ul class="flex flex-wrap items-center justify-center gap-1 text-xs font-light">
                <li><router-link to="/">Home</router-link></li>
                <li><span>/</span></li>
                <li><span>Size Guide</span></li>
            </ul>
        </div>
        <div class="pt-8 container">
            <div class="flex flex-col items-center gap-4 text-center font-light">
                <h1 class="text-2xl text-foreground">Sizing Guide</h1>
                <p class="text-xs text-muted-foreground">This is an approximate conversion table to help you find your
                    size. If you have already purchased an item by our brand, we recommend you select the same size as
                    indicated on its label
                </p>
            </div>
            <div class="flex flex-col md:flex-row gap-6 mt-6 justify-center ">
                <div class="flex-1 w-full flex flex-col items-center gap-4 text-lg font-light">
                    <span>Women’s apparel sizing</span>
                    <Datatable :columns="sizingColumns" :data="womensApparelSizing" />
                    <span>Men’s apparel sizing</span>
                    <Datatable :columns="sizingColumns" :data="mensApparelSizing" />
                </div>
                <div class="flex flex-col gap-4 items-center">
                    <div class="w-full object-cover object-center max-w-[400px] md:max-w-[230px]">
                        <img :src="SizingGuide" alt="sizing guide" class="w-full h-full object-cover">
                    </div>
                    <div class="flex flex-col gap-2 w-full text-sm font-light text-foreground">
                        <div v-for="item in sizingDetails" :key="item.label" class="flex flex-col">
                            <p>{{ item.label }}</p>
                            <p class="text-muted-foreground">{{ item.value }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import Datatable from '../shared/Datatable.vue';
import { mensApparelSizing, sizingColumns, sizingDetails, womensApparelSizing } from './sizing.column';
import SizingGuide from '../../assets/images/size-guide.webp';
</script>
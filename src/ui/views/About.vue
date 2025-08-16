<template>
    <section class="page font-light min-h-[calc(100vh-120px)]">
        <CurentRouteList :name="'About Our Site'" :className="'justify-center'" />

        <p class="text-3xl font-normal text-center my-6">About Our Store</p>
        <div class="w-full object-cover object-center max-w-7xl mx-auto">
            <img :src="AboutImage" alt="sizing guide" class="w-full h-full object-cover">
        </div>
        <p class="max-w-3xl my-8 text-sm font-light mx-auto text-center">A great About Us page helps builds trust
            between you and
            your
            customers. The
            more content you
            provide about
            you and your business, the more confident people will be when purchasing from your store.

        </p>
        <div class="w-full object-cover object-center max-w-56 mx-auto">
            <img :src="SignImage" alt="sizing guide" class="w-full h-full object-cover">
        </div>

    </section>
</template>
<script lang="ts" setup>
import AboutImage from '../assets/images/about-page.webp';
import SignImage from '../assets/images/blogs-about_large.webp';
import CurentRouteList from '../components/shared/curentRouteList.vue';
import { ROUTES_LIST } from '../router/routes.enum';
</script>
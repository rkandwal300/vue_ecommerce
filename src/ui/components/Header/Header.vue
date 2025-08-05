<template>
    <header class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div
            class="mx-auto min-h-[50px] px-2.5 w-full self-center max-w-xl sm:max-w-2xl lg:max-w-7xl flex items-center justify-between">
            <div class="flex items-center gap-5">

                <SlideInSheet :trigger="({ onOpen }: any) =>
                    h('button',
                        {
                            class: 'lg:hidden',
                            onClick: onOpen,
                        },
                        [
                            h('img', {
                                src: responsiveBar,
                                alt: 'Menu Icon',
                                width: '30',
                            }),
                            h('span', { class: 'sr-only' }, 'Menu Icon')
                        ]
                    )" :content="({ onClose }: any) =>
                        h('div', {}, [
                            h('h2', {}, 'Left Panel'),
                            h('button', { onClick: onClose }, 'Close')
                        ])
                        " />



                <button class="lg:hidden"><img :src="logoResponsive" alt="Shella " width="30" /> <span
                        class="sr-only">Shella</span></button>
                <button class="lg:block hidden"><img :src="logo" alt="Shella" width="70" /> <span
                        class="sr-only">Shella</span></button>
            </div>
            <div class="flex lg:hidden items-center">

                <a v-for="page in pagesLink" :href="page.href"
                    class="p-2 rounded hover:shadow px-auto hover:bg-secondary">
                    <img :src="page.icon" :alt="page.label" width="30" />
                    <span class="sr-only">{{ page.label }}</span>
                </a>
            </div>
        </div>

    </header>
</template>
<script setup lang="ts">
import responsiveBar from '@/ui/assets/logo/menuResponsiveIcon.svg'
import SlideInSheet from './SlideInSheet.vue'
import logoResponsive from '@/ui/assets/logo/logoResponsive.svg'
import logo from '@/ui/assets/logo/logo.svg'
import cart from '@/ui/assets/logo/cart.svg'
import user from '@/ui/assets/logo/user.svg'
import wishlist from '@/ui/assets/logo/wishlist.svg'
import support from '@/ui/assets/logo/support.svg'
import { h, ref } from 'vue';


const pagesLink = ref([
    {
        label: "Customer Support",
        icon: support,
        href: "/pages/customer-service"
    },
    {
        label: "Customer Login",
        icon: user,
        href: "/pages/login"
    },
    {
        label: "Customer WishList",
        icon: wishlist,
        href: "/pages/wishlist"
    },
    {
        label: "Shopping Cart",
        icon: cart,
        href: "/pages/shopping-cart"
    },

])
</script>
import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'
import cart from '@/ui/assets/logo/cart.svg'
import user from '@/ui/assets/logo/user.svg'
import wishlist from '@/ui/assets/logo/wishlist.svg'
import support from '@/ui/assets/logo/support.svg'

export const useHeaderStore = defineStore('header', () => {
    const isHeaderVisible = ref(true);
    const routesList = readonly([
        { label: 'Customer Support', icon: support, href: '/pages/customer-service' },
        { label: 'Customer Login', icon: user, href: '/pages/login' },
        { label: 'Customer WishList', icon: wishlist, href: '/pages/wishlist' },
        { label: 'Shopping Cart', icon: cart, href: '/pages/shopping-cart' }
    ])
    const navList = readonly([
        { label: 'Home', icon: cart, href: '/' },
        { label: 'Products', icon: cart, href: '/pages/products' },
        { label: 'Men', icon: cart, href: '/pages/products/men' },
        { label: 'Women', icon: cart, href: '/pages/products/women' },
        { label: 'Brands', icon: cart, href: '/pages/brands' },
        { label: 'About Us', icon: user, href: '/pages/about' },
        { label: 'Sizing Guide', icon: wishlist, href: '/pages/size-guide' },
        { label: 'Contact Us', icon: cart, href: '/pages/contact' },
    ])
    /**
     * Function to set the visibility of the header
     * @param {boolean} visible - true to show the header, false to hide it
     */
    function setHeaderVisibility(visible: boolean) {
        isHeaderVisible.value = visible
    }
    return {
        navList,
        routesList,
        isHeaderVisible,
        setHeaderVisibility
    }
})
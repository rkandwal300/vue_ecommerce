import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'
import cart from '@/ui/assets/logo/cart.svg'
import user from '@/ui/assets/logo/user.svg'
import wishlist from '@/ui/assets/logo/wishlist.svg'
import support from '@/ui/assets/logo/support.svg'
import { ROUTES_LIST } from '../router/routes.enum'

export const useHeaderStore = defineStore('header', () => {
    const isHeaderVisible = ref(true);
    const routesList = readonly([
        { label: 'Customer Support', icon: support, href: ROUTES_LIST.CUSTOMER_SUPPORT },
        { label: 'Customer Login', icon: user, href: ROUTES_LIST.CUSTOMER_LOGIN },
        { label: 'Customer WishList', icon: wishlist, href: ROUTES_LIST.CUSTOMER_WISHLIST },
        { label: 'Shopping Cart', icon: cart, href: ROUTES_LIST.SHOPPING_CART },
    ])
    const navList = readonly([
        { label: 'Home', icon: cart, href: ROUTES_LIST.HOME },
        { label: 'Products', icon: cart, href: ROUTES_LIST.PRODUCTS },
        { label: 'Men', icon: cart, href: ROUTES_LIST.MEN },
        { label: 'Women', icon: cart, href: ROUTES_LIST.WOMEN },
        { label: 'Brands', icon: cart, href: ROUTES_LIST.BRANDS },
        { label: 'About Us', icon: user, href: ROUTES_LIST.ABOUT_US },
        { label: 'Sizing Guide', icon: wishlist, href: ROUTES_LIST.SIZING_GUIDE },
        { label: 'Contact Us', icon: cart, href: ROUTES_LIST.CONTACT_US },
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
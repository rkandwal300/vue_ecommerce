<template>
    <footer class="border-t border-secondary text-center font-light pt-8 pb-4">
        <!-- Newsletter Section -->
        <div class="mb-8 px-4">
            <h2 class="text-lg font-semibold tracking-wide">NEWSLETTER SUBSCRIPTION</h2>
            <p class="text-sm !text-muted-foreground mt-2">
                Sign up for Sheila updates to receive information about new arrivals, future events and specials.
            </p>

            <div class="mt-4 flex justify-center">
                <input v-model="userEmail" type="email" placeholder="Enter Your Email Address"
                    class="border border-muted-foreground px-4 py-2 text-sm focus:outline-none focus:border-muted-foreground w-64" />
                <button @click="Subscribe"
                    class="border border-muted-foreground px-4 py-2 text-sm cursor-pointer font-semibold hover:bg-foreground hover:text-background transition">
                    SUBSCRIBE!
                </button>
            </div>
        </div>

        <v-divider class="mb-4" />
        <!-- Copyright -->
        <div class="flex flex-col px-4">
            <p class="text-xs text-gray-500">
                © 2025 Sheila Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Rahul Kandwal.
            </p>

            <!-- Social Media Icons -->
            <div class="flex justify-center gap-4 mt-4 !text-muted-foreground">
                <RiFacebookFill class="w-5 h-5 cursor-pointer hover:text-foreground" />
                <RiTwitterFill class="w-5 h-5 cursor-pointer hover:text-foreground" />
                <RiInstagramFill class="w-5 h-5 cursor-pointer hover:text-foreground" />
                <RiPinterestFill class="w-5 h-5 cursor-pointer hover:text-foreground" />
                <RiYoutubeFill class="w-5 h-5 cursor-pointer hover:text-foreground" />
                <RiSkypeFill class="w-5 h-5 cursor-pointer hover:text-foreground" />
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
    RiFacebookFill,
    RiTwitterFill,
    RiInstagramFill,
    RiPinterestFill,
    RiYoutubeFill,
    RiSkypeFill
} from "vue-remix-icons";
import { toast } from "vue3-toastify";

const isSubscribed = ref(false);
const userEmail = ref('');

const Subscribe = () => {
    if (!userEmail.value) {
        toast("Please enter your email address", {
            type: "error",
        });
        return;
    }
    if (isSubscribed.value) {
        toast("You are already subscribed!", {
            type: "info",
        });
        return;
    }
    userEmail.value = '';
    isSubscribed.value = true;
    toast("Thank you for subscribing! ", {
        type: "success",
    });

}
</script>

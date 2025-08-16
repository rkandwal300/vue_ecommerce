<template>
    <div class="container flex flex-col items-start justify-center gap-6">
        <div class="flex flex-col gap-6">
            <h1 class="text-3xl text-foreground">Contact Us</h1>
            <p class="text-muted-foreground text-sm">Have a question? You may find an answer in our FAQs. But
                you
                can also contact us:</p>
        </div>
        <div class="flex flex-col text-lg">
            <p>CALL US: 800-123-4567 </p>
            <p> LANE NO. 4, GUMANIYAWALA, RISHIKESH UTTARAKHAND, 249201</p>
        </div>
        <div class="flex flex-col text-muted-foreground text-base">
            <p>Opening Hours: </p>
            <p>CALL US: 800-123-4567 </p>
            <p v-for="(value, index) in openingHours" :key="index">
                {{ value }}
            </p>
        </div>
        <div class="relative w-fit  rounded-lg overflow-hidden shadow-lg cursor-pointer">

            <iframe title="Google Map" :src="embedUrl" width="400" height="300" style="border:0;" allowfullscreen="true"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <button @click="openInGoogleMaps" class="absolute cursor-pointer inset-0 bg-transparent"
                title="Click to open in Google Maps"></button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const openingHours = ref([
    'Monday to Friday 9:00 AM - 6:00 PM',
    'Saturday 10:00 AM - 2:00 PM',
    'Sunday: Closed'
]);

const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4156.604778185833!2d78.26636966009094!3d30.07103744586279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e6aa11c6283%3A0x3a9c621f32d26c4!2sLane%20No.%204%2C%20Aam%20Bag%2C%20IDPL%20Colony%2C%20Rishikesh%2C%20Veerbhadra%2C%20Uttarakhand%20249202!5e0!3m2!1sen!2sin!4v1755150835548!5m2!1sen!2sin&zoom=17";
const mapsUrl =
    "https://maps.google.com/?q=LANE+NO.+4,+GUMANIYAWALA,+RISHIKESH+UTTARAKHAND";

function openInGoogleMaps() {
    window.open(mapsUrl, "_blank");
}
</script>
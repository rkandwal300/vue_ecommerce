<template>
    <section class="page font-light min-h-[calc(100vh-120px)] ">
        <CurentRouteList :name="'Contact'" />
        <div class="container grid md:grid-cols-2 gap-8">
            <ContactDetails />
            <ContactForm />
        </div>

    </section>
</template>

<script setup lang="ts">
import ContactDetails from '../components/Contact/ContactDetails.vue';
import ContactForm from '../components/Contact/ContactForm.vue';
import CurentRouteList from '../components/shared/curentRouteList.vue';


</script>

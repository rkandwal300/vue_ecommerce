<script setup lang="ts">
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { toast } from "vue3-toastify"
import { ref } from 'vue'
import { RiChat4Line } from 'vue-remix-icons'

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    message: z.string().min(1, 'Message is required'),
    phone: z.string().optional()
})

const { handleSubmit, errors, defineField, resetForm } = useForm({
    validationSchema: toTypedSchema(schema)
})

// define each field
const [nameValue, nameProps] = defineField('name')
const [emailValue, emailProps] = defineField('email')
const [phoneValue, phoneProps] = defineField('phone')
const [messageValue, messageProps] = defineField('message')

const submitted = ref(false)

const onSubmit = handleSubmit(
    (formValues) => {
        toast.success('Form submitted successfully!')
        resetForm()
        submitted.value = false
    },
    () => {
        submitted.value = true
        toast.error('Please correct the errors in the form.')
    }
)
</script>

<template>
    <form @submit.prevent="onSubmit" class="pt-3 space-y-6">
        <p class="text-3xl">Drop Us A Line</p>
        <p class="text-sm text-muted-foreground">
            We’re happy to answer any questions you have or provide you with an estimate.
        </p>

        <!-- Name -->
        <div class="space-y-2">
            <label for="name" class="block text-base">NAME (required)*</label>
            <input v-model="nameValue" v-bind="nameProps" id="name" type="text" placeholder="Enter your name"
                class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                :class="submitted && errors.name ? 'border-red-500' : 'border-foreground'" />
        </div>

        <!-- Email -->
        <div class="space-y-2">
            <label for="email" class="block text-base">EMAIL (required)*</label>
            <input v-model="emailValue" v-bind="emailProps" id="email" type="email"
                placeholder="Enter your email address"
                class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                :class="submitted && errors.email ? 'border-red-500' : 'border-foreground'" />
        </div>

        <!-- Phone -->
        <div class="space-y-2">
            <label for="phone" class="block text-base">Phone Number</label>
            <input v-model="phoneValue" v-bind="phoneProps" id="phone" type="text" placeholder="Enter your phone number"
                class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors border-foreground" />
        </div>

        <!-- Message -->
        <div class="space-y-2">
            <label for="message" class="block text-base">YOUR MESSAGE (required)*</label>
            <textarea v-model="messageValue" v-bind="messageProps" id="message" placeholder="Type your message here..."
                class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                :class="submitted && errors.message ? 'border-red-500' : 'border-foreground'"></textarea>
        </div>

        <!-- Submit -->
        <button type="submit"
            class="bg-foreground text-background py-2 px-6 rounded shadow cursor-pointer flex items-center">
            <v-icon>
                <RiChat4Line />
            </v-icon>
            <span class="mx-2">Submit</span>
        </button>
    </form>
</template>

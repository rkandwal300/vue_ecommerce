<template>
    <div>
        <component :is="trigger({ onOpen })" />

        <teleport to="body">
            <div v-show="open" class="fixed inset-0 bg-primary/30 z-[999] flex justify-start" @click.self="onClose">
                <transition enter-active-class="transition-transform duration-700 ease-in-out"
                    enter-from-class="-translate-x-full" enter-to-class="translate-x-0"
                    leave-active-class="transition-transform duration-700 ease-in-out" leave-from-class="translate-x-0"
                    leave-to-class="-translate-x-full">
                    <div class="bg-background w-[300px] h-full shadow-md p-4">
                        <component :is="content({ onClose })" />
                    </div>
                </transition>
            </div>
        </teleport>
    </div>
</template>


<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps({
    trigger: {
        type: Function,
        required: true,
    },
    content: {
        type: Function,
        required: true,
    },
})

const open = ref(false)

const onOpen = async () => {
    open.value = true
    await nextTick() // Ensures the DOM is updated before transition starts
}

const onClose = () => {
    open.value = false
}
</script>
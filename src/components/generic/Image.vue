<!--
    Image.vue
    Basic component for preformatted images with lightbox functionality.
-->

<script setup lang="ts">

import { ref } from 'vue';

interface Props {
    src: string
    alt: string
};

const props = defineProps<Props>();

const isOpen = ref(false);

const openLightbox = () => {
    isOpen.value = true
    document.body.style.overflow = 'hidden'
};

const closeLightbox = () => {
    isOpen.value = false
    document.body.style.overflow = ''
};

</script>

<template>
    <div class="
        rounded-lg border border-ctp-surface2 hover:border-ctp-lavender
        duration-200 transition-colors cursor-pointer overflow-hidden">

        <!-- Thumbnail image -->
        <img :src="props.src" :alt="props.alt" @click="openLightbox"
            class="rounded-lg hover:scale-105 duration-300 transition-transform" />

        <!-- Lightbox overlay -->
        <Teleport to="body">
            <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300"
                leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-ctp-crust/90 p-4"
                    @click="closeLightbox" @keydown.escape="closeLightbox" tabindex="0">

                    <!-- Close button -->
                    <button @click="closeLightbox" aria-label="Close" class="absolute top-4 right-4
                        text-ctp-text hover:text-ctp-red transition-colors z-10 cursor-pointer">

                        <!-- Close button icon -->
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <!-- Full-size image -->
                    <Transition enter-active-class="transition-all duration-300" enter-from-class="opacity-0 scale-95"
                        enter-to-class="opacity-100 scale-100" leave-active-class="transition-all duration-200"
                        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                        <img v-if="isOpen" :src="props.src" :alt="props.alt"
                            class="max-h-full max-w-full object-contain rounded-lg" @click.stop />
                    </Transition>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

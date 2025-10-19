<!-- DownloadButton.vue
    Button that opens a popup with Windows and Linux download options.
-->

<script setup lang="ts">

import Subheader from './Subheader.vue';

import { ref } from 'vue';

interface Props {
    windowsLink: string
    linuxLink: string
};

const props = defineProps<Props>();

const isOpen = ref(false);

const openPopup = () => (isOpen.value = true);
const closePopup = () => (isOpen.value = false);

const handleDownload = (url: string) => {
    window.open(url, '_blank')
    closePopup()
};

</script>

<template>
    <!-- Main button -->
    <button @click="openPopup" class="inline-flex items-center cursor-pointer
           gap-2 px-2 py-2 rounded-md
           font-medium text-sm text-ctp-base
           bg-ctp-pink hover:bg-ctp-flamingo transition-colors duration-200">
        <slot />
    </button>

    <!-- Popup Overlay -->
    <Teleport to="body">
        <Transition enter-active-class="transition-opacity duration-200" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="isOpen"
                class="font-[Overpass] fixed inset-0 z-50 flex items-center justify-center bg-ctp-crust/90 p-4"
                @click="closePopup">

                <!-- Popup Card -->
                <Transition enter-active-class="transition-all duration-200" enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100" leave-active-class="transition-all duration-200"
                    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">

                    <div v-if="isOpen" class="bg-ctp-crust rounded-lg p-6 max-w-xs w-full
                        border border-ctp-surface2 hover:border-ctp-lavender transition-colors" @click.stop>

                        <!-- Header -->
                        <div class="flex items-center justify-between mb-6">
                            <Subheader title="Choose Platform" />

                            <!-- Close button -->
                            <button @click="closePopup"
                                class="text-ctp-text hover:text-ctp-red transition-colors cursor-pointer mb-1"
                                aria-label="Close">

                                <!-- Close button icon -->
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- Download buttons -->
                        <div class="space-y-3">

                            <!-- Windows button -->
                            <button @click="handleDownload(props.windowsLink)" class="w-full flex items-center gap-3 px-4 py-3 cursor-pointer
                                bg-ctp-surface0 hover:bg-ctp-surface1 text-ctp-text rounded-md transition-colors">
                                <span class="font-medium"> Windows</span>
                            </button>

                            <!-- Linux button -->
                            <button @click="handleDownload(props.linuxLink)" class="w-full flex items-center gap-3 px-4 py-3 cursor-pointer
                                bg-ctp-surface0 hover:bg-ctp-surface1 text-ctp-text rounded-md transition-colors">
                                <span class="font-medium">󰌽 Linux</span>
                            </button>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

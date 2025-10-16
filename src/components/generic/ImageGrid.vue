<!--
    ImageGrid.vue
    Grid layout for displaying multiple images with descriptions.
-->

<script setup lang="ts">

import Text from './Text.vue';

interface ImageItem {
    src: string
    alt: string
    description?: string
};

interface Props {
    images: ImageItem[]
    columns?: 1 | 2
};

withDefaults(defineProps<Props>(), {
    columns: 2
})

</script>

<template>
    <div class="grid" :class="{
        'grid-cols-1 gap-4': columns === 1,
        'grid-cols-1 md:grid-cols-2 gap-6': columns === 2,
    }">
        <!-- Loop over each image -->
        <div v-for="(image, index) in images" :key="index" :class="[
            'space-y-3',
            images.length % 2 !== 0 && index === images.length - 1 ? 'md:col-span-2' : '']">

            <!-- Description above image -->
            <Text v-if="image.description">
                {{ image.description }}
            </Text>

            <!-- Image -->
            <img :src="image.src" :alt="image.alt" class="w-full rounded-lg" />
        </div>
    </div>
</template>

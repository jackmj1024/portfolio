<!--
    YouTubeEmbed.vue
    YouTube video player with consistent styling.
-->

<script setup lang="ts">

interface Props {
    videoId: string
    aspectRatio?: '16:9' | '21:9'
};

const props = withDefaults(defineProps<Props>(), {
    aspectRatio: '16:9'
});

const aspectRatioPadding = {
    '16:9': '56.25%',
    '21:9': '41.86%'
};

</script>

<template>
    <div class="w-full">
        <!-- Aspect ratio container -->
        <div class="relative w-full" :style="{ paddingBottom: aspectRatioPadding[aspectRatio] }">
            <!-- Embedded video player -->
            <iframe :src="`https://www.youtube.com/embed/${videoId}`" title="video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                frameborder="0" allowfullscreen class="absolute top-0 left-0 w-full h-full 
                rounded-lg border border-ctp-surface2 hover:border-ctp-lavender
                transition-color duration-200">
            </iframe>
        </div>
    </div>
</template>

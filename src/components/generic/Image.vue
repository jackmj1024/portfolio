<!--
    Image.vue
    Basic component for preformatted images.
-->

<script setup lang="ts">

interface Props { src: string; alt: string };
const props = defineProps<Props>();

</script>

<template>
    <img :src="props.src" :alt="props.alt" class="w-full rounded-lg mb-8" />
</template>

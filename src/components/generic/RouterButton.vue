<!--
    RouterButton.vue
    Customizable button component that redirects to another page using Vue Router.
-->

<script setup lang="ts">

interface Props {
    path: string
};

defineProps<Props>();

</script>

<template>
    <router-link :to=path class="inline-flex items-center cursor-pointer
        gap-2 px-2 py-2 rounded-md 
        font-medium text-sm text-ctp-base
        bg-ctp-lavender hover:bg-ctp-blue transition-colors duration-200">
        <slot />
    </router-link>
</template>

<!--
    GitHubButton.vue
    Customizable button component that redirects to an external GitHub repository.
-->

<script setup lang="ts">

interface Props {
    path: string
};

defineProps<Props>();

</script>

<template>
    <a :href="path" target="_blank" rel="noopener noreferrer" class="inline-flex items-center cursor-pointer
               gap-2 px-2 py-2 rounded-md 
               font-medium text-sm text-ctp-base
               bg-ctp-green hover:bg-ctp-teal transition-colors duration-200">
        <slot />
    </a>
</template>

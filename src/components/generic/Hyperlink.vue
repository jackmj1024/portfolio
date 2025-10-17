<!--
    Hyperlink.vue
    Basic component for preformatted in-text links..
-->

<script setup lang="ts">

interface Props { href: string; };
const props = defineProps<Props>();

</script>

<template>
    <a :href="props.href" class="text-ctp-blue hover:text-ctp-sapphire" target="_blank" rel="noopener noreferrer">
        <slot />
    </a>
</template>

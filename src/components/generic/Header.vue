<!--
    Header.vue
    A combined header with a title and an optional subtitle for panel sections.
-->

<script setup lang="ts">

interface Props {
    title: string
    subtitle?: string
};

defineProps<Props>();

</script>

<template>
    <div class="mb-4">
        <!-- Main title-->
        <h2 class="text-3xl sm:text-4xl text-balance
            text-ctp-text font-semibold tracking-tight">
            {{ title }}
        </h2>

        <!-- Subtitle -->
        <p v-if="subtitle" class="text-base text-ctp-subtext1 mt-1">
            <i>{{ subtitle }}</i>
        </p>
    </div>
</template>

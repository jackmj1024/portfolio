<!--
    Header.vue
    A combined header and optional subheader for panel sections.
-->

<script setup lang="ts">

interface Props {
    title: string
    subtitle?: string
}

defineProps<Props>()

</script>

<template>
    <div class="mb-6">
        <!-- Main header -->
        <h2 class="text-3xl sm:text-4xl text-balance
            text-ctp-text font-semibold tracking-tight">
            {{ title }}
        </h2>

        <!-- Sub-header -->
        <p v-if="subtitle" class="text-base text-ctp-subtext1 mt-2">
            <i>{{ subtitle }}</i>
        </p>
    </div>
</template>

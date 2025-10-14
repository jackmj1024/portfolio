<!--
    Subheader.vue
    A combined subheader and optional subtext for smaller panel elements.
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
        <!-- Main title-->
        <h3 class="text-xl font-semibold text-ctp-text mb-2">
            {{ title }}
        </h3>

        <!-- Subtitle -->
        <p class="text-ctp-subtext0 text-sm">
            {{ subtitle }}
        </p>
    </div>
</template>

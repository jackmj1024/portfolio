<!--
    Subheader.vue
    A combined subheader and optional subtext for smaller panel elements.
-->

<script setup lang="ts">

interface Props {
    title: string
    subtitle?: string
};

defineProps<Props>();

</script>

<template>
    <div>
        <!-- Main title -->
        <h3 :class="[
            'font-semibold text-ctp-text mb-2',
            subtitle ? 'text-xl' : 'text-2xl'
        ]">
            {{ title }}
        </h3>

        <!-- Subtitle (only shown if provided) -->
        <p v-if="subtitle" class="text-ctp-subtext0 text-sm">
            {{ subtitle }}
        </p>
    </div>
</template>

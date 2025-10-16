<!--
    TagDisplay.vue
    Grid and format boxes for displaying project tags.
-->

<script setup lang="ts">

interface Props {
    tags: string[]
};

defineProps<Props>();

</script>

<template>
    <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in tags" :key="tag" class="px-2 py-1
                    text-xs font-medium text-ctp-subtext1 
                    bg-ctp-surface0 rounded">
            {{ tag }}
        </span>
    </div>
</template>

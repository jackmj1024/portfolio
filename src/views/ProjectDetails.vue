<!--
    ProjectDetails.vue
    Shared layout for individual project detail pages.
-->

<script setup lang="ts">

import Panel from '../components/generic/Panel.vue';
import Header from '../components/generic/Header.vue';
import Image from '../components/generic/Image.vue';
import LinkButton from '../components/generic/LinkButton.vue';
import TagDisplay from '../components/generic/TagDisplay.vue';

interface Props {
    project: Project
}

defineProps<Props>()

</script>

<template>
    <div class="px-6 py-6 max-w-6xl mx-auto space-y-8">
        <Panel>
            <!-- Header -->
            <Header :title="project.title" :subtitle="project.description" />

            <!-- Tags -->
            <TagDisplay :tags=project.tags />

            <!-- Header image -->
            <div v-if=project.image>
                <Image :src=project.image :alt=project.title />
            </div>

            <!-- Main content slot -->
            <div class="max-w-none space-y-6">
                <slot />
            </div>

            <!-- Back button -->
            <div class="mt-6 pt-6 border-t border-ctp-surface0">
                <LinkButton path="/">
                    Back to Home
                </LinkButton>
            </div>
        </Panel>
    </div>
</template>

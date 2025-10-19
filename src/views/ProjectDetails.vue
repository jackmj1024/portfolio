<!--
    ProjectDetails.vue
    Shared layout for individual project detail pages.
-->

<script setup lang="ts">

import type { Project } from '../data/projects.ts';

import Panel from '../components/generic/Panel.vue';
import Header from '../components/generic/Header.vue';
import Image from '../components/generic/Image.vue';
import TagDisplay from '../components/generic/TagDisplay.vue';

import RouterButton from '../components/generic/RouterButton.vue';
import GitHubButton from '../components/generic/GitHubButton.vue';
import DownloadButton from '../components/generic/DownloadButton.vue';

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
            <TagDisplay :tags="project.tags" />

            <!-- Header image -->
            <div v-if="project.image" class="mb-4">
                <Image :src="project.image" :alt="project.title" />
            </div>

            <!-- Main content slot -->
            <div class="max-w-none space-y-6">
                <slot />
            </div>

            <div class="mt-6 pt-6 border-t border-ctp-surface0 space-y-2 space-x-2">
                <!-- Back button -->
                <RouterButton path="/">
                    Back to Home
                </RouterButton>

                <!-- GitHub button -->
                <GitHubButton v-if="project.githubLink" :path="project.githubLink">
                    View on GitHub
                </GitHubButton>

                <!-- Download button -->
                <DownloadButton v-if="project.windowsLink && project.linuxLink" :windowsLink="project.windowsLink"
                    :linuxLink="project.linuxLink">
                    Download Game
                </DownloadButton>
            </div>
        </Panel>
    </div>
</template>

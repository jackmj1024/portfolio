<!--
    ProjectCard.vue
    Grid card for an individual project with a thumbnail, title, description, tags, and a details button.
-->

<script setup lang="ts">

import Subheader from './Subheader.vue';
import LinkButton from './LinkButton.vue';

interface Project {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
}

interface Props {
    project: Project
}

defineProps<Props>()

</script>

<template>
    <div class="group
        relative overflow-hidden
        bg-ctp-base rounded-lg 
        border border-ctp-surface2 hover:border-ctp-lavender
        transition-all duration-200">


        <!-- Thumbnail -->
        <div class="aspect-video w-full overflow-hidden bg-ctp-surface0">
            <img :src="project.image" :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>

        <!-- Content -->
        <div class="p-6">
            <!-- Header -->
            <Subheader :title=project.title :subtitle=project.description />

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in project.tags" :key="tag" class="px-2 py-1
                    text-xs font-medium text-ctp-subtext1 
                    bg-ctp-surface0 rounded">
                    {{ tag }}
                </span>
            </div>

            <!-- Link Button -->
            <LinkButton :path=project.id>
                More Information

                <!-- Display an arrow icon next to the label text. -->
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </LinkButton>
        </div>
    </div>
</template>

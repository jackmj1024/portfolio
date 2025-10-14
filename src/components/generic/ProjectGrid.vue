<!--
    ProjectGrid.vue
    Simple layout grid for displaying project cards.
-->

<script setup lang="ts">

import ProjectCard from './ProjectCard.vue'

interface Project {
    title: string
    description: string
    image: string
    tags: string[]
}

interface Props {
    projects: Project[]
    columns?: 1 | 2 | 3
}

withDefaults(defineProps<Props>(), {
    columns: 2
})
</script>

<template>
    <!-- Grid -->
    <div class="grid gap-6" :class="{
        'grid-cols-1': columns === 1,
        'grid-cols-1 md:grid-cols-2': columns === 2,
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': columns === 3
    }">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
</template>

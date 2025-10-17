<!--
    ProjectCard.vue
    Grid card for an individual project with a thumbnail, title, description, tags, and a details button.
-->

<script setup lang="ts">

import Subheader from './Subheader.vue';
import RouterButton from './RouterButton.vue';
import TagDisplay from './TagDisplay.vue';

interface Props {
    project: Project
};

defineProps<Props>();

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
            <Subheader :title=project.title :subtitle=project.description class="mb-3" />

            <!-- Tags -->
            <TagDisplay :tags="project.tags" />

            <!-- Link Button -->
            <RouterButton :path=project.id>
                More Information
            </RouterButton>
        </div>
    </div>
</template>

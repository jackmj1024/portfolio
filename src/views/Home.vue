<!--
    Home.vue
    The main homepage element for my portfolio website.
-->

<script setup lang="ts">

import IntroSection from '../components/IntroSection.vue';
import SkillSection from '../components/SkillSection.vue';
import ProjectSection from '../components/ProjectSection.vue';

</script>

<template>
    <div class="px-8 py-8 space-y-4 max-w-6xl mx-auto">
        <IntroSection />
        <SkillSection />
        <div id="projects">
            <ProjectSection />
        </div>
    </div>
</template>

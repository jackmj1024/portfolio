<!--
    Home.vue
    The main homepage element for my portfolio website.
-->

<script setup lang="ts">

import Intro from '../components/Intro.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';

</script>

<template>
    <div class="px-8 py-8 space-y-4 max-w-6xl mx-auto">
        <Intro />
        <Skills />
        <Projects />
    </div>
</template>

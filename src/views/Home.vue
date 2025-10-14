<!--
    Home.vue
    The main homepage element for my portfolio website.
-->

<script setup lang="ts">

import Intro from '../components/Intro.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';

// Ignore user light/dark preference and always use Catppuccin Macchiato color palette.
localStorage.setItem("theme", "macchiato");
document.documentElement.className = "macchiato";

</script>

<template>
    <div class="dark bg-ctp-base font-[Overpass]
        px-8 py-8 space-y-4
        max-w-6xl mx-auto">
        <Intro />
        <Skills />
        <Projects />
    </div>
</template>

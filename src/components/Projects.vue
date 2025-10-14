<!--
    Projects.vue
    A set of two panels for displaying grids of project cards in two different categories.
-->

<script setup lang="ts">

import Panel from './generic/Panel.vue'
import Header from './generic/Header.vue'
import ProjectGrid from './generic/ProjectGrid.vue'

// List of projects to show in the featured section.
const featured = [
    {
        title: 'Apollo Video Learning Platform',
        description: 'A web-based video player with extended educational features for professors and students.',
        image: new URL('../assets/images/apollo0.png', import.meta.url).href,
        tags: ['Web', 'React', 'JavaScript', 'MongoDB']
    },
    {
        title: 'Portfolio Website',
        description: 'The website that you\'re viewing right now! I created it from scratch to showcase my work, as well as to learn Tailwind CSS.',
        image: new URL('../assets/project-placeholder.png', import.meta.url).href,
        tags: ['Web', 'Vue', 'TypeScript', 'Tailwind CSS']
    },
    {
        title: 'Call of Cthulhuson',
        description: 'A first-person adventure game that I created as a submission for a programming event hosted by the MSOE game development club.',
        image: new URL('../assets/project-placeholder.png', import.meta.url).href,
        tags: ['Game', 'Godot Engine', 'C#']
    },
    {
        title: 'NASA App Development Challenge (2019)',
        description: 'An application I made in high school for a nation-wide competition hosted by NASA which my team ended up winning.',
        image: new URL('../assets/images/rcdx0.png', import.meta.url).href,
        tags: ['Desktop', 'Unity Engine', 'C#', 'Python', 'UDP Networking']
    },
]

// List of extra projects to show below the featured section.
const other = [
    {
        title: 'GTFS Data Tool',
        description: 'A fairly extensive data parsing tool that I created for one of my classes at MSOE.',
        image: new URL('../assets/project-placeholder.png', import.meta.url).href,
        tags: ['Desktop', 'Java', 'JavaFX', 'CSS', 'Google Transit API']
    },
    {
        title: 'Rattle Me Bones!',
        description: 'A simple LAN game that I made to learn about multiplayer networking in Godot.',
        image: new URL('../assets/project-placeholder.png', import.meta.url).href,
        tags: ['Game', 'Godot Engine', 'C#', 'Networking']
    },
    {
        title: 'Parousia [WIP]',
        description: 'An online-multiplayer sandbox game. One of my current hobby projects.',
        image: new URL('../assets/project-placeholder.png', import.meta.url).href,
        tags: ['Game', 'Godot Engine', 'GDScript', 'Networking', 'Procedural Generation']
    },
]
</script>

<template>
    <!-- Featured Projects -->
    <Panel>
        <Header title="Featured Projects" subtitle="My best and most complete work." />
        <ProjectGrid :projects="featured" :columns="2" />
    </Panel>

    <!-- Other Projects -->
    <Panel>
        <Header title="Other Projects" subtitle="Smaller projects, experiments, and learning exercises" />
        <ProjectGrid :projects="other" :columns="3" />
    </Panel>
</template>

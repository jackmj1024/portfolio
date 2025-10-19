<!--
    ProjectSection.vue
    A set of two panels for displaying featured projects and other projects in a card/grid layout.
-->

<script setup lang="ts">

import Panel from './generic/Panel.vue';
import Header from './generic/Header.vue';
import ProjectGrid from './generic/ProjectGrid.vue';
import { featured } from '../data/projects.ts';

</script>

<template>
    <!-- Featured Projects -->
    <Panel>
        <Header title="Featured Projects" subtitle="A selection of my best and most complete work." />
        <ProjectGrid :projects="featured" :columns="2" />
    </Panel>

    <!-- Other Projects 
    <Panel>
        <div class="mb-8">
            <Header>Other Projects</Header>
            <Subtext>Smaller projects, experiments, and learning exercises.</Subtext>
        </div>
        <ProjectGrid :projects="other" :columns="3" />
    </Panel>
    -->
</template>

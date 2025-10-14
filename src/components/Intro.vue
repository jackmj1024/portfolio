<!--
    Intro.vue
    A panel for displaying a brief introductory description, a self-portrait, and some additional links.
-->

<script setup lang="ts">

import Panel from './generic/Panel.vue'
import Header from './generic/Header.vue'
import Text from './generic/Text.vue'

</script>

<template>
    <Panel>
        <div class="grid grid-cols-1 lg:grid-cols-2 
            max-w-2xl mx-auto
            gap-x-8 gap-y-16 lg:gap-y-0
            lg:max-w-none lg:items-center">

            <!-- Left-side group -->
            <div class="lg:row-start-2 lg:max-w-md">
                <!-- Header -->
                <Header title="Jackson Jones" subtitle="Senior Software Engineering Student at MSOE" />

                <!-- Description -->
                <Text>
                    Hi! My name is Jack, and I'm currently pursuing my Bachelor of Science in Software Engineering at
                    the
                    Milwaukee School of Engineering. This is my last year, so I'll be graduating in May 2026.
                    <br /> <br />
                    As someone who has been programming since middle-school, I've worked on several kinds of
                    projects over the years, including but not limited to web applications, native desktop programs,
                    and video games.
                    <br /> <br />
                    This website was created to showcase some of the best of these projects.
                </Text>
            </div>

            <!-- Self-portrait -->
            <img src="../assets/images/portrait.webp" alt="Self-Portrait" width="2432" height="1442" class="relative -z-20
                w-full lg:w-full lg:max-w-full
                rounded-xl shadow-xl 
                ring-1 ring-white/10 
                lg:row-span-4 lg:col-start-2" />
        </div>
    </Panel>
</template>

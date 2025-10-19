<!--
    SkillSection.vue
    A panel for displaying a list of skills and some general information about them.
-->

<script setup lang="ts">

import Panel from './generic/Panel.vue';
import Header from './generic/Header.vue';
import Text from './generic/Text.vue';

interface Skill {
    name: string;
    description: string;
    icon: string;
}

const skill_items: Skill[] = [
    {
        name: 'Design Patterns & Architecture',
        description: 'Committed to writing clean, maintainable code through comprehensive documentation, unit testing, and established design patterns for object-oriented and functional programming.',
        icon: new URL('../assets/icons/certificate.svg', import.meta.url).href,
    },
    {
        name: 'Web Applications',
        description: 'Skilled at building modern web applications using React and Vue, managing databases with MySQL and MongoDB, and styling with Tailwind CSS.',
        icon: new URL('../assets/icons/html.svg', import.meta.url).href,
    },
    {
        name: 'Version Control & Collaboration',
        description: 'Experience with collaborative development using Agile/Scrum methodologies, as well as Git for version control and project management.',
        icon: new URL('../assets/icons/puppet.svg', import.meta.url).href,
    },
    {
        name: 'Operating Systems',
        description: 'Deep understanding of operating system architecture, processes, memory management, and more as well as extensive experience with Linux system administration and the open-source ecosystem.',
        icon: new URL('../assets/icons/bash.svg', import.meta.url).href,
    },
    {
        name: 'Game Development',
        description: 'Proficient with Godot, Unity, and Unreal game engines, including practical experience implementing networked multiplayer systems.',
        icon: new URL('../assets/icons/godot.svg', import.meta.url).href,
    },
    {
        name: 'Programming Languages',
        description: 'Well-versed with several programming languages including C/C++, Python, Java/Kotlin, JavaScript/TypeScript, and Rust.',
        icon: new URL('../assets/icons/fvm.svg', import.meta.url).href,
    }
];

</script>

<template>
    <Panel>
        <!-- Header -->
        <Header title="Skills & Interests" subtitle="Including but not limited to..." />

        <!-- Show skill items defined in the script above. -->
        <Text>
            <dl class="max-w-xl md:max-w-none gap-6
                grid grid-cols-1
                md:grid-cols-2 md:grid-rows-3 md:grid-flow-col
                md:auto-rows-max">
                <div v-for="item in skill_items" :key="item.name" class="relative">
                    <!-- Item label (icon and name) -->
                    <dt class="inline-block ml-8 font-bold">
                        <img :src=item.icon alt="" class="absolute size-5
                        left-1" />
                        {{ item.name + " - " }}
                    </dt>

                    <!-- Spacer and item description -->
                    {{ ' ' }}
                    <dd class="inline">{{ item.description }}</dd>
                </div>
            </dl>
        </Text>
    </Panel>
</template>

<!--
    IntroSection.vue
    A panel for displaying a brief introductory description, a self-portrait, and some additional links.
-->

<script setup lang="ts">

import Panel from './generic/Panel.vue';
import Header from './generic/Header.vue';
import Text from './generic/Text.vue';
import Hyperlink from './generic/Hyperlink.vue';

import Image from './generic/Image.vue';
import portrait from '../assets/images/portrait.webp';

</script>

<template>
    <Panel>
        <div class="grid grid-cols-1 md:grid-cols-2 
            max-w-full mx-auto
            gap-x-8 gap-y-16 md:gap-y-0
            md:max-w-none md:items-center">

            <!-- Left-side group -->
            <div class="md:row-start-2 md:max-w-md">
                <!-- Header -->
                <Header title="Jackson Jones" subtitle="Senior Software Engineering Student at MSOE" />

                <!-- Description -->
                <Text>
                    Hi! My name is Jack, and I'm currently pursuing my Bachelor of Science in Software Engineering at
                    the
                    Milwaukee School of Engineering. This is my last year, so I'll be graduating in May 2026.
                </Text>
                <Text>
                    As someone who has been programming since middle-school, I've worked on several kinds of
                    projects over the years, including but not limited to web applications, native desktop programs,
                    and video games.
                </Text>
                <Text>
                    This website was created to showcase some of the best of my personal projects in more detail than a
                    traditional resume would allow. If you still would like to see my resume, click
                    <Hyperlink href="https://u.pcloud.link/publink/show?code=XZg4B95ZwUQxoPEleKLCaEhBDuQrg8iff3fy">
                        here
                    </Hyperlink>
                    to download it.
                </Text>
            </div>

            <div class="md:row-span-4 md:col-start-2">
                <Image :src="portrait" alt="Self portrait" />
            </div>
        </div>
    </Panel>
</template>

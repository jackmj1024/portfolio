<!--
    Apollo.vue
    Project detail page for Call of Cthulhuson.
-->

<script setup lang="ts">

import ProjectDetails from '../ProjectDetails.vue';
import { projects } from '../../data/projects.ts';

import Subheader from '../../components/generic/Subheader.vue';
import Text from '../../components/generic/Text.vue';
import Hyperlink from '../../components/generic/Hyperlink.vue';

import Image from '../../components/generic/Image.vue';
import ImageGrid from '../../components/generic/ImageGrid.vue';
import YouTubeEmbed from '../../components/generic/YouTubeEmbed.vue';

interface ImageItem {
    src: string
    alt: string
    description: string
};

const images: ImageItem = [
    {
        src: new URL('../../assets/images/cthulhuson1.png', import.meta.url).href,
        alt: "Screenshot: graphics",
        description: "Stylized monochrome 3D graphics with cel-shading:"
    },

    {
        src: new URL('../../assets/images/cthulhuson2.png', import.meta.url).href,
        alt: "Screenshot: gameplay",
        description: "First-person movement controls with shooter gameplay:"
    },

    {
        src: new URL('../../assets/images/cthulhuson3.png', import.meta.url).href,
        alt: "Screenshot: level",
        description: "A complete level and story that progresses over 3 acts:"
    },

    {
        src: new URL('../../assets/images/cthulhuson4.png', import.meta.url).href,
        alt: "Screenshot: boss",
        description: "A goofy villain with voice acting done by a friend of mine:"
    },
];

const project: Project = projects.cthulhuson;

</script>

<template>
    <ProjectDetails :project=project>
        <!-- Overview -->
        <section>
            <Subheader title="Overview" />
            <Text>
                During my first few years at MSOE, the Game Development Club hosted a yearly competition for Halloween
                called the InkJam, where students were challenged to make a game within a limited timeframe following a
                specific theme and using a monochrome color palette. For this year, we were given the option of choosing
                between several different themes. The theme option I chose was "nightmare".
            </Text>

            <Text>
                The game I submitted, Call of Cthulhuson, was a
                simple first-person shooter game where the player is tasked with navigating a forest within their
                own
                dream, defending against hordes of enemies, and ultimately defeat the main antagonist.
            </Text>

            <Text>
                The title and overall theme of the game is reference to the short story
                <Hyperlink href="https://en.wikipedia.org/wiki/The_Call_of_Cthulhu">
                    The Call of Cthulhu
                </Hyperlink>
                by H.P. Lovecraft, which is in the public domain and thus free to use in other media such as this one.
                The titular Cthulhuson is referred to as "Son of Cthulhu" and serves as the game's main
                antagonist and final boss.
            </Text>
            <YouTubeEmbed videoId="4QrzXg-dyWc?si=14qcTgE_8zj4ymsk" aspectRatio="21:9" />
        </section>

        <!-- Features -->
        <section>
            <Subheader title="Key Features" />
            <ImageGrid :images="images" :columns="2" />
        </section>

        <!-- Development-->
        <section>
            <Subheader title="Development" />
            <Text>
                This project was created using Godot Engine. At the time I was using C# as the main language with
                certain parts written in GDScript, the dedicated language built for Godot. I wrote scripts for the
                player movement controls, combat mechanics, enemy behaviour/pathfinding, level progression
                management, and more.
            </Text>

            <Text>
                The game's graphics consist
                primarily of
                of
                <Hyperlink href="https://kenney.nl">
                    low-poly assets
                </Hyperlink>
                which were recolored and stylized in post using cel-shading and edge outlines. The combination of these
                graphical techniques as well as the monochrome color palette resulted in a clean and consistent
                comic-book style aesthetic without being too demanding on system resources.
            </Text>

            <Text>
                While I did do all of the programming and development by myself, I did have a project partner. My friend
                Aidan, who was also an MSOE student helped write and perform voice lines for the character of
                Cthulhuson, who speaks to the player throughout the game by commenting on progress, developing the
                narrative, and occassionally making jokes.
            </Text>

            <Text>
                While I technically had a month to work on this project, my tight academic schedule at the time resulted
                in most of the development being done within about two weeks. Due to this, the original version had
                various bugs and oversights that needed to be fixed in a post-competition patch. </Text>
        </section>

        <!-- Takeaways -->
        <section>
            <Subheader title="Takeaways" />
            <Text>
                In addition to getting me really familiar with Godot Engine (which
                I had switched to somewhat recently from Unity), working on Call of Cthulhuson and recieving feedback
                from players taught me quite a bit
                about good design and approachability.
                One of the main purposes of
                these types of competitions is to quickly experiment with some rough ideas with the goal of creating
                something that is complete, albeit a bit unpolished. As such, I've been able to reuse parts of this
                game's
                code and environments for my current WIP hobby project, which is essentially a more
                polished version of this
                with additional levels and features.
            </Text>
        </section>
    </ProjectDetails>
</template>

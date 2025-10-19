<!--
    Portfolio.vue
    Project detail page for the portfolio website itself.
-->

<script setup lang="ts">

import { projects } from '../../data/projects.ts';
import type { Project } from '../../data/projects.ts';

import ProjectDetails from '../ProjectDetails.vue';

import Subheader from '../../components/generic/Subheader.vue';
import Text from '../../components/generic/Text.vue';
import Hyperlink from '../../components/generic/Hyperlink.vue';

const project: Project = projects.portfolio!;

</script>

<template>
    <ProjectDetails :project=project>
        <!-- Overview -->
        <section>
            <Subheader title="Overview" />
            <Text>
                I created this website for two main reasons. The first was because I wanted to replace my old portfolio
                website that I made as a freshman, which
                at this point was very outdated both in terms of content and as a representation of my development and
                design skills. The original version was a very simple website built with Wordpress, and I figured that
                as a web developer I probably should have a website that was actually built from scratch.

            </Text>

            <Text>
                The second reason was that I wanted to have a personal project in web
                development, and an opportunity to learn Tailwind CSS. When I started working on it, I decided that I
                wanted to try out another framework (most of my web development experience up until now was done in
                React) so I decided to create the website using the Vue framework, which I had used a little bit in the
                past but was still mostly unfamiliar with.
            </Text>

        </section>

        <!-- Development-->
        <section>
            <Subheader title="Development" />

            <Text>
                This project uses the Vue framework with Vite as the build tool, and the scripting is
                done in TypeScript as opposed to standard JavaScript. This project was very frontend-focused, with the
                majority of development time being used for styling and structure. That being said, there are a few more
                advanced features that required some scripting, such as:
            </Text>

            <Text>
                <ul class="list-disc list-inside ml-4">
                    <li>Multi-page navigation using Vue Router.</li>
                    <li>Clickable images with lightbox (full-screen) functionality.</li>
                    <li>Buttons that open popup-menu dialogues.</li>
                    <li>A contact form integrated with Formspree for automatic email delivery.</li>
                </ul>
            </Text>

            <Text>
                The project's component architecture emphasizes modularity and reusability. Almost every type of element
                on the website has its own configurable Vue component with detailed comment documentation, prop
                variables,
                and Tailwind CSS formatting.
                Every component is very reactive to user input, with styling and transition rules defined by Tailwind
                classes. Most of the main UI colors come from the
                <Hyperlink href="https://catppuccin.com/palette/">
                    Catppuccin Macchiato
                </Hyperlink>
                palette, which also has a color library for Tailwind CSS.
            </Text>
        </section>

        <!-- Takeaways -->
        <section>
            <Subheader title="Takeaways" />
            <Text>
                This project, while fairly modest, did quite a lot for me. For one thing, now I have a professional
                portfolio that I'm very happy with. But beyond that, working on this website taught me quite a bit about
                web development. In addition to mastering a new framework, this project really helped me get better with
                visual design and user experience. While Tailwind still requires a lot of manual work, it cuts out a lot
                of the tediousness that comes with writing CSS code directly. This allowed me to spend much more time
                than I normally would on fine-tuning layouts, colors, transitions, and other visual features. The result
                was a simple yet functional website that does exactly what I need it to do in a way that is responsive
                and intuitive.
            </Text>
        </section>
    </ProjectDetails>
</template>

<!--
    Apollo.vue
    Project detail page for the Apollo Video Learning Platform
-->

<script setup lang="ts">

import ProjectDetails from '../ProjectDetails.vue';
import { projects } from '../../data/projects.ts';

import Subheader from '../../components/generic/Subheader.vue';
import Text from '../../components/generic/Text.vue';

import Image from '../../components/generic/Image.vue';
import ImageGrid from '../../components/generic/ImageGrid.vue';

interface ImageItem {
    src: string
    alt: string
    description: string
};

const images: ImageItem = [
    {
        src: new URL('../../assets/images/apollo2.png', import.meta.url).href,
        alt: "Screenshot: discussion window",
        description: "A discussion system where students and professors can leave comments on specific timestamps of a video:"
    },
    {
        src: new URL('../../assets/images/apollo3.png', import.meta.url).href,
        alt: "Screenshot: course page",
        description: "A course-group system where professors can invite students to view assigned videos and due dates:"
    },
    {
        src: new URL('../../assets/images/apollo1.png', import.meta.url).href,
        alt: "Screenshot: video player",
        description: "A viewing page where students and professors can watch external videos with an auto-scrolling transcript:"
    },
];

const project: Project = projects.apollo;

</script>

<template>
    <ProjectDetails :project=project>
        <!-- Overview -->
        <section>
            <Subheader title="Overview" />
            <Text>
                During my junior year at MSOE, I worked on a piece of software for my Software Development Lab,
                which
                was a course designed to simulate a real-life collaborative development environment following a
                Scrum
                workflow. We worked a group of 4 and had a computer science professor at MSOE who served as the product
                owner and gave us
                specifications for the program we were developing.
            </Text>

            <Text>
                The general premise behind this project was to create a web application that can be used by students to
                watch and interact with internet videos assigned for viewing by their professor. In addition to serving
                as a
                basic frontend for playing videos from external sources, our main goals were to create a due-date system
                as well as a discussion system
                for
                students that would be more more in-depth than a traditional comments section.
            </Text>
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
                The project was composed of a frontend, a backend, and a MongoDB database. The frontend was written in
                JavaScript using the React framework and the Material UI component library. while the backend was
                written in Java using the Spring Boot framework.
            </Text>

            <Text>
                During this project, I worked on both the frontend and the backend. In addition to making significant
                contributions to the discussion system and the courses page, I also implemented a login/sessions system
                through Google's Single-Sign On interface.
            </Text>
        </section>

        <!-- Takeaways -->
        <section>
            <Subheader title="Takeaways" />
            <Text>
                The main thing I got out of this project was experience working in a more realistic collaboration
                environment with a well-maintained Scrum schedule and release pipeline. Although I already had some
                experience with web development, this project helped me significantly grow my proficiency with the React
                framework as well as my understanding of databases and user sessions.
            </Text>
        </section>

        <!-- Links (sample code, not release-ready) 
        <section>
            <h3 class="text-2xl font-semibold text-ctp-text mb-4">Links</h3>
            <div class="flex gap-4">
                <a href="#"
                    class="px-4 py-2 bg-ctp-blue text-ctp-base rounded-md font-medium hover:bg-ctp-sapphire transition-colors">
                    View on GitHub
                </a>
                <a href="#"
                    class="px-4 py-2 bg-ctp-green text-ctp-base rounded-md font-medium hover:bg-ctp-teal transition-colors">
                    Live Demo
                </a>
            </div>
        </section>-->
    </ProjectDetails>
</template>

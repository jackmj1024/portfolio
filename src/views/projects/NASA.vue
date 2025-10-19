<!--
    NASA.vue
    Project detail page for the NASA App Development Challenge.
-->

<script setup lang="ts">

import ProjectDetails from '../ProjectDetails.vue';
import { projects } from '../../data/projects.ts';

import Subheader from '../../components/generic/Subheader.vue';
import Text from '../../components/generic/Text.vue';
import Hyperlink from '../../components/generic/Hyperlink.vue';

import Image from '../../components/generic/Image.vue';
import ImageGrid from '../../components/generic/ImageGrid.vue';
import img1 from '../../assets/images/apollo1.png';
import img2 from '../../assets/images/apollo2.png';
import img3 from '../../assets/images/apollo3.png';

interface ImageItem {
    src: string
    alt: string
    description: string
};

const images = [
    {
        src: new URL('../../assets/images/nasa1.png', import.meta.url).href,
        alt: "Screenshot: NASA twitter post",
        description: `A public <a href="https://x.com/LearnWithNASA/status/1137046965588496389"
            class="text-ctp-blue hover:text-ctp-sapphire" target="_blank" rel="noopener noreferrer">
            Twitter post
            </a> announcing our team's victory.`
    },
    {
        src: new URL('../../assets/images/nasa2.png', import.meta.url).href,
        alt: "Screenshot: news article",
        description: `A <a href="https://www.tulsapeople.com/tulsa-people/august-2019/riverfield-works-with-nasa"
            class="text-ctp-blue hover:text-ctp-sapphire" target="_blank" rel="noopener noreferrer">
            news article 
            </a> by Tulsa People that was written about us.`
    },
];

const project: Project = projects.nasa;

</script>

<template>
    <ProjectDetails :project=project>
        <!-- Overview -->
        <section>
            <Subheader title="Overview" />

            <Text>
                During my sophomore year of high school (2019), I was the lead programmer on a winning team of five
                students for a nation-wide competition hosted by the National Air and Space Administration.
            </Text>

            <Text>
                The goal of this particular challenge was to develop an application to track a rocket during takeoff. A
                separate server program would send us data packets over UDP which contained information needed to
                calculate the current position and rotation of the object in the air.
            </Text>

            <Text>
                More details about the project specification can be found <Hyperlink
                    href="https://www.nasa.gov/wp-content/uploads/2019/03/fy19_adc_guide.pdf">here</Hyperlink>.
            </Text>

        </section>

        <!-- Development-->
        <section>
            <Subheader title="Development" />

            <Text>
                The application was composed of two general parts: a UDP reciever script and a
                graphical display. We create the program using Unity Engine, mostly due to my own familiarity with
                the
                software at the time. Over the coures of the challenge, we attended virtual meeting with the project
                designers at NASA to help guide us through the development process. After a few months, we ended up
                with
                a complete 3d applicatoin that could recieve network data and use it to represent the location of
                the
                rocket in 3D space.
            </Text>

            <Text>
                The 3D/graphical element of the program was actually pretty straight forward. Writing the code to
                actually receive the UDP packets was the most difficult and time consuming part by far. Once we had
                gotten that working, the rest of it really just came down to translating the data into something
                usable
                and applying it to the virtual rocket model. In this case, that meant using math to convert the
                received
                latitude/longitude values into XYZ coordinates that Unity could understand.
            </Text>
        </section>

        <section>
            <Subheader title="Post-Development" />
            <ImageGrid :images="images" :columns="2" class="mb-4" />

            <Text>
                During the following summer, we received word from the project overseers at NASA that our team
                (along
                with another team from New Jersey) had be selected as the winners of the entire competition. As a
                reward, we were invited to spend a few days at Kennedy Space Center in Cape Canaveral, Florida.
            </Text>
            <Text>
                While we
                were there, we got to watch a live test-launch of the Artemis Program's [Ascent Abort-2] rocket.
                Afterward, we were able to see our program working with the real data from the launch as opposed to
                the sample data they gave us to test the program with.
            </Text>
        </section>

        <!-- Takeaways -->
        <section>
            <Subheader title="Takeaways" />
            <Text>
                This was one of the first full-scale development projects that I worked on, and I've come a long way
                since then. Still, participating in this challenge and ultimately winning had a massive impact on my
                skills and knowledge as well as my general mindset regarding programming. I had previously only been
                interested in programming ad a hobby for my own enjoyment, but seeing myself succeed in such an
                ambitious project made me really start to consier pursuing it as a career. I doubt I would be where
                I am
                today if I didn't have this experience.
            </Text>
        </section>
    </ProjectDetails>
</template>

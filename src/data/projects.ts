/*
* projects.ts
* Shared project information used across different pages.
*/

export interface Project {
    id: string
    title: string
    description: string
    image: string
    tags: string[]
    githubLink?: string
};

export const projects: Record<string, Project> = {
    apollo: {
        id: 'apollo',
        title: 'Apollo Video Learning Platform',
        description: 'A web-based video player with extended educational features for professors and students.',
        image: new URL('../assets/images/apollo0.png', import.meta.url).href,
        tags: ['Web', 'React', 'JavaScript', 'MongoDB'],
    },
    portfolio: {
        id: 'portfolio',
        title: 'Portfolio Website',
        description: 'The website that you\'re viewing right now! I created it to showcase my work, as well as to learn Tailwind CSS.',
        image: new URL('../assets/project-placeholder.png', import.meta.url).href,
        tags: ['Web', 'Vue', 'TypeScript', 'Tailwind CSS'],
    },
    cthulhuson: {
        id: 'cthulhuson',
        title: 'Call of Cthulhuson',
        description: 'A first-person adventure game that I created as a submission for a programming event hosted by the MSOE game development club.',
        image: new URL('../assets/project-placeholder.png', import.meta.url).href,
        tags: ['Game', 'Godot Engine', 'C#'],
    },
    nasa: {
        id: 'nasa',
        title: 'NASA App Development Challenge',
        description: 'An application I made in high school for a nation-wide competition hosted by NASA which my team ended up winning.',
        image: new URL('../assets/images/nasa0.png', import.meta.url).href,
        tags: ['3D', 'Unity Engine', 'C#', 'UDP Networking'],
        githubLink: "https://github.com/jackmj1024/nasa-rcdx"
    },
};

// Categorize featured projects.
export const featured = [
    projects.apollo,
    projects.portfolio,
    projects.cthulhuson,
    projects.nasa,
];

// Categorize other projects.
export const other: Project[] = [];

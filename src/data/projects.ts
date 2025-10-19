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
    windowsLink?: string
    linuxLink?: string
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
        description: 'The website that you\'re viewing right now! I made it to show my work, as well as to learn Vue and Tailwind CSS.',
        image: new URL('../assets/images/portfolio0.png', import.meta.url).href,
        tags: ['Web', 'Vue', 'TypeScript', 'Tailwind CSS'],
        githubLink: "https://github.com/jackmj1024/portfolio"
    },

    cthulhuson: {
        id: 'cthulhuson',
        title: 'Call of Cthulhuson',
        description: 'A 3D adventure game that I created for a programming event hosted by the MSOE game development club.',
        image: new URL('../assets/images/cthulhuson0.png', import.meta.url).href,
        tags: ['Game', 'Godot Engine', 'C#'],
        windowsLink: "https://u.pcloud.link/publink/show?code=XZk5in5ZOpGvR6zrLi4oQAt8iXo7GjLbltAV",
        linuxLink: "https://u.pcloud.link/publink/show?code=XZ05in5ZiFuHVw7rvLzL1HBTWv6kuztF2lNV"
    },

    nasa: {
        id: 'nasa',
        title: 'NASA App Development Challenge',
        description: 'An application I made in high school for a nation-wide competition by NASA which my team ended up winning.',
        image: new URL('../assets/images/nasa0.png', import.meta.url).href,
        tags: ['3D', 'Unity Engine', 'C#', 'UDP Networking'],
        githubLink: "https://github.com/jackmj1024/nasa-rcdx"
    },
};

// Categorize featured projects.
export const featured = [
    projects.apollo!,
    projects.cthulhuson!,
    projects.portfolio!,
    projects.nasa!,
];

// Categorize other projects.
export const other: Project[] = [];

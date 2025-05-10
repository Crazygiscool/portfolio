import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'crazygiscool@outlook.com',
    emailSubject: "Let's collaborate on open source",
    emailBody: 'Hi Crazygiscool, I am reaching out to you because...',
    portfolio: 'https://crazygiscool.vercel.app',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/crazygiscool' },
];

export const MY_STACK = {
    languages: [
        {
            name: 'Python',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
            name: 'Java',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
            name: 'C++',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        },
        {
            name: 'GDScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg',
        },
    ],
    frontend: [
        {
            name: 'HTML',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        },
        {
            name: 'CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        },
    ],
    tools: [
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Everything Minecraft Plugin',
        slug: 'everything-minecraft',
        sourceCode: 'https://github.com/crazygiscool/everything',
        year: 2025,
        description: `
        A comprehensive Minecraft plugin that combines multiple popular plugin functionalities into one unified solution. <br/> <br/>
        
        Key Features:<br/>
        <ul>
            <li>🎮 Multiple plugin integrations</li>
            <li>⚡ Optimized performance</li>
            <li>🛠️ Customizable configurations</li>
            <li>🔌 Easy to extend</li>
        </ul>
        `,
        role: `
        Solo Developer <br/>
        Responsible for:
        <ul>
            <li>✅ Plugin architecture and development</li>
            <li>🎮 Game mechanics implementation</li>
            <li>🔧 Performance optimization</li>
            <li>📝 Documentation</li>
        </ul>
        `,
        techStack: [
            'Java',
            'Spigot API',
            'Maven',
            'Git'
        ],
        thumbnail: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/minecraft/minecraft.png',
        longThumbnail: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/minecraft/minecraft.png',
        images: [
            'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/minecraft/minecraft.png',
            'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/minecraft/minecraft.png',
        ],
    },
];

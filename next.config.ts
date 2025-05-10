import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                pathname: '/gh/devicons/devicon/icons/**',
            },
            {
                protocol: 'https',
                hostname: 'www.minecraft.net',
                pathname: '/etc.clientlibs/**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '/github/**',
            }
        ],
    },
};

export default nextConfig;

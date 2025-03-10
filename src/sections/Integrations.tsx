import { C_IntergrationColumn, C_Tag } from '@/components';

import figmaIcon from '../../public/images/figma-logo.svg';
import notionIcon from '../../public/images/notion-logo.svg';
import slackIcon from '../../public/images/slack-logo.svg';
import relumeIcon from '../../public/images/relume-logo.svg';
import framerIcon from '../../public/images/framer-logo.svg';
import githubIcon from '../../public/images/github-logo.svg';
import Image from 'next/image';

const integrations = [
    {
        name: 'Figma',
        icon: figmaIcon,
        description: 'Figma is a collaborative interface design tool.',
    },
    {
        name: 'Notion',
        icon: notionIcon,
        description: 'Notion is an all-in-one workspace for notes and docs.',
    },
    {
        name: 'Slack',
        icon: slackIcon,
        description: 'Slack is a powerful team communication platform.',
    },
    {
        name: 'Relume',
        icon: relumeIcon,
        description: 'Relume is a no-code website builder and design system.',
    },
    {
        name: 'Framer',
        icon: framerIcon,
        description: 'Framer is a professional website prototyping tool.',
    },
    {
        name: 'GitHub',
        icon: githubIcon,
        description: 'GitHub is the leading platform for code collaboration.',
    },
];

export type IntergrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className='py-24 overflow-hidden'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 items-center lg:gap-16'>
                    <div>
                        <C_Tag>Integrations</C_Tag>
                        <h2 className='text-6xl font-medium mt-6'>
                            Play well with <span className='text-lime-400'>others</span>
                        </h2>
                        <p className='text-lg text-white/50 mt-4'>
                            Layers seamlessly connects with your favorite tools, making it easy to
                            plug into any workflow and collaborate across platforms.
                        </p>
                    </div>

                    <div>
                        <div className='h-[400px] lg:h-[800px] overflow-hidden mt-8 lg:mt-0 grid grid-cols-2 gap-4 relative'>
                            <div className='bg-neutral-950 blur-sm w-full h-3 absolute z-10' />
                            <C_IntergrationColumn integrations={integrations} />
                            <C_IntergrationColumn
                                integrations={integrations.slice().reverse()}
                                className='hidden md:flex'
                            />
                            <div className='bg-neutral-950 blur-sm w-full h-3 absolute z-10 bottom-0' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

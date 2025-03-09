import { C_FeatureCard, C_Tag, C_Avatar, C_Key } from '@/components';
import avt_01 from '../../public/images/avatar-lula-meyers.jpg';
import avt_02 from '../../public/images/avatar-ashwin-santiago.jpg';
import avt_03 from '../../public/images/avatar-florence-shaw.jpg';
import Image from 'next/image';

const features = [
    'Asset Library',
    'Code Preview',
    'Flow Mode',
    'Smart Sync',
    'Auto Layout',
    'Fast Search',
    'Smart Guides',
];

export default function Features() {
    return (
        <section className='py-24'>
            <div className='container mx-auto'>
                <div className='flex justify-center'>
                    <C_Tag>Features</C_Tag>
                </div>
                <h2 className='text-6xl text-center font-medium mt-6 max-w-2xl mx-auto'>
                    Where power meets <span className='text-lime-400'>simplicity</span>
                </h2>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8'>
                    <C_FeatureCard
                        title='Real-time Collaboration'
                        description='Work together seamlessly with conflict-free team editing'
                        className='md:col-span-2 lg:col-span-1'
                    >
                        <div className='aspect-video flex items-center justify-center'>
                            <C_Avatar className='z-40'>
                                <Image src={avt_01} alt='Avatar_01' className='rounded-full' />
                            </C_Avatar>
                            <C_Avatar className='-ml-6 border-green-500 z-30'>
                                <Image src={avt_02} alt='Avatar_02' className='rounded-full' />
                            </C_Avatar>
                            <C_Avatar className='-ml-6 border-amber-500 z-20'>
                                <Image src={avt_03} alt='Avatar_03' className='rounded-full' />
                            </C_Avatar>
                            <C_Avatar className='-ml-6 bg-transparent'>
                                <div className='size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1'>
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span key={i} className='size-1.5 rounded-full bg-white' />
                                    ))}
                                </div>
                            </C_Avatar>
                        </div>
                    </C_FeatureCard>
                    <C_FeatureCard
                        title='Interactive Prototyping'
                        description='Engage your clients with prototypes that react to user actions'
                        className='md:col-span-2 lg:col-span-1'
                    >
                        <div className='aspect-video flex items-center justify-center'>
                            <p className='text-4xl font-extrabold text-white/20 text-center'>
                                <p className=''>
                                    We're achived {''}
                                    <span className='bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text'>
                                        incredible
                                    </span>{' '}
                                    this year
                                </p>
                            </p>
                        </div>
                    </C_FeatureCard>
                    <C_FeatureCard
                        title='Keyboard Quick Actions'
                        description='Powerful commands to help you create designs more quickly'
                        className='md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto'
                    >
                        <div className='aspect-video flex items-center justify-center gap-4'>
                            <C_Key className='w-28'>shift</C_Key>
                            <C_Key>alt</C_Key>
                            <C_Key>c</C_Key>
                        </div>
                    </C_FeatureCard>
                </div>

                <div className='mt-8 flex flex-wrap gap-3 items-center justify-center'>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className='bg-neutral-900 border border-white/10 inline-flex
                            justify-center items-center gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-2xl '
                        >
                            <span
                                className='bg-lime-400 text-neutral-950 size-5 rounded-full 
                            inline-flex justify-center items-center text-xl pb-0.5'
                            >
                                &#10038;
                            </span>
                            <span className='font-medium md:text-lg'>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

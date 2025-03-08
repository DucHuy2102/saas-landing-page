import { C_Tag } from '@/components';

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className='py-28 lg:py-40'>
            <div className='container mx-auto'>
                <div className='flex justify-center'>
                    <C_Tag className=''>Introducing Layers</C_Tag>
                </div>
                <div className='text-center text-4xl md:text-6xl lg:text-7xl font-medium mt-10'>
                    <span className=''>Your creative process deserves better.</span>
                    <span className='text-white/15'>
                        {''} {text}
                    </span>
                    <span className='text-lime-400 block'>That&apos;s why we built Layers</span>
                </div>
            </div>
        </section>
    );
}

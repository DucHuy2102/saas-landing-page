import { C_Button, C_Pointer } from '@/components';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className='py-24 overflow-x-clip'>
            <div className='container mx-auto flex flex-col items-center relative'>
                <div className='absolute -left-36 top-16 hidden lg:block'>
                    <Image
                        src='/images/design-2.png'
                        alt='Design example 1'
                        width={300}
                        height={100}
                    />
                </div>
                <div className='absolute -right-64 -top-16 hidden lg:block'>
                    <Image
                        src='/images/design-2.png'
                        alt='Design example 2'
                        width={400}
                        height={100}
                    />
                </div>
                <div className='absolute left-56 top-96 hidden lg:block'>
                    <C_Pointer name='dHuy' />
                </div>
                <div className='absolute right-80 -top-4 hidden lg:block'>
                    <C_Pointer name='CR7' color='red' />
                </div>
                <div className='flex justify-center'>
                    <div className='py-1 px-5 inline-flex bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold'>
                        💫 7.5M seed round raised
                    </div>
                </div>
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 max-w-5xl'>
                    Impactful design, created effortlessly
                </h1>
                <p className='text-center text-xl text-white/50 mt-8 max-w-2xl'>
                    Designing a website is hard. We make it easy. Our platform allows you to create
                    a website without any design or technical skills.
                </p>
                <form className='flex items-center justify-between border border-white/15 rounded-full p-2 mt-8 max-w-lg'>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='bg-transparent px-5 outline-none text-lg text-zinc-100 w-full'
                    />
                    <C_Button
                        type='submit'
                        variant='primary'
                        className='whitespace-nowrap'
                        size='sm'
                    >
                        Sign Up
                    </C_Button>
                </form>
            </div>
        </section>
    );
}

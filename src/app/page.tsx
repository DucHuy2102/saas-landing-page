import { Features, Hero, Introduction, LogoTicker, Navbar } from '@/sections';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
        </>
    );
}

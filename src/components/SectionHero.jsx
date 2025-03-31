import './componentsStyle/SectionHero.css';
import TopBanner from './TopBanner';
import Header from './Header';
import Hero from './Hero';

export default function SectionHero() {
    return (
        <section className=''>
            <TopBanner />
            <Header />
            <Hero />
        </section>
    );
}
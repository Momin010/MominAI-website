import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Principles from '../components/Principles';
import Architecture from '../components/Architecture';
import Laws from '../components/Laws';
import Founders from '../components/Founders';
import Waitlist from '../components/Waitlist';

const Home = () => {
    return (
        <>
            <Hero />
            <Problem />
            <Laws />
            <Principles />
            <Architecture />
            <Waitlist />
            <Founders />
        </>
    );
};

export default Home;

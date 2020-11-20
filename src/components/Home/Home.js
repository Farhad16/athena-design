import React from 'react';
import Achievement from '../Achievement/Achievement';
import Dedication from '../Dedication/Dedication';
import Header from '../Header/Header';
import OurWork from '../OurWork/OurWork';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header />
            <OurWork />
            <Projects />
            <Achievement />
            <Dedication />
        </div>
    );
};

export default Home;
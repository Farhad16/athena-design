import React from 'react';
import Achievement from '../Achievement/Achievement';
import Dedication from '../Dedication/Dedication';
import Footer from '../Footer/Footer';
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
            <Footer />
        </div>
    );
};

export default Home;
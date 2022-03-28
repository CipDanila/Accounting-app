import React from 'react';
import Background from '../components/Background';
import Footer from '../components/Footer';
import Header from '../components/Header';

function AboutUs() {
    return (
        <div>
            <Header />
            <Background />
            <div className="about-us">
                <h2>Garbage</h2>
                <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;

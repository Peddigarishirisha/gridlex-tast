import React from 'react';
import './About.css';
import CountriesNavBar from './navbarCountries';

const About = () => {
    return (
        <div>
            <div className='about_container'>
            <img className='imageset' src="/rb_2147914972.png"></img>
            <CountriesNavBar />
            </div>
         
            <div className="main2">
                <div className="about-container">
                    <h1 className="about-title">Explore the Countries Search App</h1>
                    <p className="about-description">
                        <strong>Welcome!</strong> The Countries Search App is your go-to platform for discovering essential information about countries around the globe. Our goal is to make exploring countries easy, engaging, and informative.
                    </p>
                    <p className="about-description">
                        <strong>Why Choose Us?</strong> Instantly find demographic details, geographical insights, and key facts for any country. Designed with simplicity in mind, our app ensures a smooth and enjoyable experience for students, travelers, and curious explorers.
                    </p>
                    <p className="about-description">
                        <strong>Our Commitment:</strong> We are dedicated to enhancing the app, adding new features, and updating data regularly to provide the most accurate information.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;

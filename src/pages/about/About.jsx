import React from 'react';
import AboutCard from './AboutCard';
import ServiceCard from './ServiceCard';

const About = () => {
    return (
        <div className='text-gray-700'>
            <AboutCard></AboutCard>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default About;
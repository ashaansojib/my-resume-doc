import React from 'react';
import AboutCard from './AboutCard';
import ServiceCard from './ServiceCard';
import QuoteCard from './QuoteCard';
import Clients from './Clients';

const About = () => {
    return (
        <div className='text-gray-700'>
            <AboutCard></AboutCard>
            <ServiceCard></ServiceCard>
            <Clients />
            <QuoteCard />
        </div>
    );
};

export default About;
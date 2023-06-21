import React from 'react';
import Skills from './Skills';
import Knoledge from './Knoledge';
import Testimonial from './Testimonial';

const Resume = () => {
    return (
        <div className='text-gray-700' data-aos="fade-right">
            <Skills />
            <Knoledge />
            <Testimonial />
        </div>
    );
};

export default Resume;
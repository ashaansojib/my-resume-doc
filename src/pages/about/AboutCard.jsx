import React from 'react';

const AboutCard = () => {
    return (
        <>
            <h2 className='text-2xl font-medium border-b py-4'><span className='text-green-500'>About</span> Me</h2>
            <div className='grid grid-cols-2 divide-x py-4'>
                <div>
                    <p className='font-sans text-xl'>I am Ashaduzzaman Sojib, web designer from USA, California. I have rich experience in web site design and building and customization, also I am good at wordpress. I love to talk with you about our unique.</p>
                </div>
                <div className='ps-2 divide-y'>
                    <p className='flex justify-between py-2'><span className='bg-green-500 text-white py-1 px-2 rounded-sm'>Age....</span> 24</p>
                    <p className='flex justify-between py-2'><span className='bg-green-500 text-white py-1 px-2 rounded-sm'>Residance....</span> Bangladeshi</p>
                    <p className='flex justify-between py-2'><span className='bg-green-500 text-white py-1 px-2 rounded-sm'>Address....</span> Rangpur, Bangladesh</p>
                    <p className='flex justify-between py-2'><span className='bg-green-500 text-white py-1 px-2 rounded-sm'>Status....</span> Available</p>
                </div>
            </div>
        </>
    );
};

export default AboutCard;
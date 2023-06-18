import React from 'react';
import { FaCode, FaDatabase, FaGlobe } from 'react-icons/fa';

const ServiceCard = () => {
    return (
        <>
            <h2 className='text-2xl font-medium border-b py-4'><span className='text-green-500'>My</span> Services</h2>
            <div className='grid grid-cols-2 text-center gap-2 mt-2'>
                <div className='p-4 border'>
                    <div className='flex justify-center text-3xl p-4 text-green-500'>
                        <FaCode></FaCode>
                    </div>
                    <h2 className='text-xl'>Web Development</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora reprehenderit voluptatibus incidunt. Vel, quia consequatur.</p>
                </div>
                <div className='p-4 border'>
                    <div className='flex justify-center text-3xl p-4 text-green-500'>
                        <FaGlobe></FaGlobe>
                    </div>
                    <h2 className='text-xl'>SEO Google Top Rank</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora reprehenderit voluptatibus incidunt. Vel, quia consequatur.</p>
                </div>
                <div className='p-4 border'>
                    <div className='flex justify-center text-3xl p-4 text-green-500'>
                        <FaDatabase></FaDatabase>
                    </div>
                    <h2 className='text-xl'>Database</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora reprehenderit voluptatibus incidunt. Vel, quia consequatur.</p>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
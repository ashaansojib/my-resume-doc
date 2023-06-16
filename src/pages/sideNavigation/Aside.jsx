import React from 'react';
import { FaPenAlt, FaUser, FaBook, FaBlog, FaPhoneAlt, FaBars } from 'react-icons/fa';
const Aside = () => {
    return (
        <aside className='h-28'>
            <div className='mb-2 '>
                <button className='py-4 px-8 w-full bg-white text-black'><FaBars className='text-2xl'></FaBars></button>
            </div>
            <div className='flex gap-2 bg-white flex-col text-black pt-2'>
                <div className='flex justify-center flex-col items-center text-center border-b'>
                    <span><FaUser></FaUser></span>
                    <button className='py-2 px-4'>About</button>
                </div>
                <div className='flex justify-center flex-col items-center text-center border-b'>
                    <FaBook></FaBook>
                    <button className='py-2 px-4'>Resume</button>
                </div>
                <div className='flex justify-center flex-col items-center text-center border-b'>
                    <FaPenAlt></FaPenAlt>
                    <button className='py-2 px-4 border-b'>Resume</button>
                </div>
                <div className='flex justify-center flex-col items-center text-center border-b'>
                    <FaBlog></FaBlog>
                    <button className='py-2 px-4'>Blogs</button>
                </div>
                <div className='flex justify-center flex-col items-center text-center'>
                    <FaPhoneAlt></FaPhoneAlt>
                    <button className='py-2 px-4'>Contact</button>
                </div>
            </div>
        </aside>
    );
};

export default Aside;
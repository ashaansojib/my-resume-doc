import React from 'react';
import { FaPenAlt, FaUser, FaBook, FaBlog, FaPhoneAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Aside = () => {
    return (
        <aside className=''>
            <div className='mb-2 '>
                <button className='py-4 px-8 w-full bg-white text-black'><FaBars className='text-2xl'></FaBars></button>
            </div>
            <div className='flex gap-2 bg-white flex-col text-black pt-2'>
                <div className='flex justify-center flex-col items-center text-center border-b'>
                    <span><FaUser></FaUser></span>
                    <Link to="/about"><button className='py-2 px-4'>About</button></Link>
                </div>
                <div className='flex justify-center flex-col items-center text-center border-b'>
                    <FaBook></FaBook>
                    <Link to="/resume"><button className='py-2 px-4'>Resume</button></Link>
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
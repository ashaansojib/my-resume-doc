import React from 'react';
import { FaTwitter, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Profile = () => {
    return (
        <div className='text-black bg-white rounded-md mt-8'>
            <div className='text-center'>
                <div className='bg-gradient-to-r to-white from-slate-300'>
                    <img src="https://i.ibb.co/w0NRg39/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background-662251-2960-removebg-pr.png" alt="" />
                </div>
                <div className='p-4 mt-2'>
                    <h2 className='py-2 text-2xl font-medium'>Ashaduzzaman Sojib</h2>
                    <div className='text-green-600'>
                        <TypeAnimation
                            sequence={[
                                'Full Stack Web Developer',
                                2000,
                                'Web Desgner',
                                2000,
                                'MERN Stack Developer',
                                2000,
                                'React JS Fontend Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <div className='flex gap-2 justify-center h-14 mt-4'>
                        <span><Link><FaTwitter /></Link></span>
                        <span><Link><FaGithub /></Link></span>
                        <span><Link><FaFacebook /></Link></span>
                        <span><Link><FaEnvelope /></Link></span>
                    </div>
                </div>
                <div className='flex justify-between border-t h-14'>
                    <button className='py-2 px-4 hover:text-green-500 w-full border-r'>Download CV</button>
                    <button className='py-2 px-4 hover:text-green-500 w-full'>Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
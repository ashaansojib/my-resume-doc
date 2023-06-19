import React from 'react';
import { FaFlag, FaPaintBrush } from 'react-icons/fa';

const Skills = () => {
    return (
        <>
            <h2 className='text-2xl font-medium border-b py-4'><span className='text-green-500'>My</span> Skills</h2>
            <div className='grid grid-cols-2'>
                <div className='border-e'>
                    <div className='flex items-center justify-center border-b'>
                        <span className='text-green-500 text-2xl'><FaPaintBrush /></span>
                        <h2 className='px-2 py-4 text-center text-xl font-medium uppercase'> Design</h2>
                    </div>
                    <ul>
                        <li className='py-2'>
                            <span className='border-green-500'>Web Site Design</span>
                            <progress className="progress progress-primary w-56" value="90" max="100"></progress>
                        </li>
                        <li className='py-2'>
                            <span className='border-green-500'>Photo Editing</span>
                            <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                        </li>
                        <li className='py-2'>
                            <span className='border-green-500'>Video Editing</span>
                            <progress className="progress progress-primary w-56" value="50" max="100"></progress>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='flex items-center justify-center border-b'>
                        <span className='text-green-500 text-2xl'><FaFlag /></span>
                        <h2 className='px-2 py-4 text-center text-xl font-medium uppercase'> Languages</h2>
                    </div>
                    <ul className='px-2'>
                        <li className='py-2'>
                            <span className='border-green-500'>Spoken English</span>
                            <progress className="progress progress-primary w-56" value="65" max="100"></progress>
                        </li>
                        <li className='py-2'>
                            <span className='border-green-500'>Bangla Language</span>
                            <progress className="progress progress-primary w-56" value="100" max="100"></progress>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Skills;
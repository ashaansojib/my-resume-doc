import React from 'react';
import { FaChartBar, FaCode, FaCheckDouble } from 'react-icons/fa';

const Knoledge = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='border-e'>
                <div className='flex items-center justify-center border-b'>
                    <span className='text-green-500 text-2xl'><FaCode /></span>
                    <h2 className='px-2 py-4 text-center text-xl font-medium uppercase'> Coding</h2>
                </div>
                <div className='grid grid-cols-2 justify-between items-center gap-4 py-2'>
                    <div className='flex flex-col items-center'>
                        <div className="radial-progress text-green-500" style={{ "--value": 90 }}>90%</div>
                        <span>ReactJS</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="radial-progress text-green-500" style={{ "--value": 75 }}>75%</div>
                        <span>JavaScript</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="radial-progress text-green-500" style={{ "--value": 50 }}>50%</div>
                        <span>MongoDB</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="radial-progress text-green-500" style={{ "--value": 50 }}>50%</div>
                        <span>NodeJS</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="radial-progress text-green-500" style={{ "--value": 75 }}>75%</div>
                        <span>React Router</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-center border-b'>
                    <span className='text-green-500 text-2xl'><FaChartBar /></span>
                    <h2 className='px-2 py-4 text-center text-xl font-medium uppercase'> Knowledge</h2>
                </div>
                <ul className='px-2'>
                    <li className='py-2 flex gap-2 items-center'>
                        <span className='text-green-500'><FaCheckDouble /></span>
                        <p>Create A Complate Web</p>
                    </li>
                    <li className='py-2 flex gap-2 items-center'>
                        <span className='text-green-500'><FaCheckDouble /></span>
                        <p>eCommerce Website</p>
                    </li>
                    <li className='py-2 flex gap-2 items-center'>
                        <span className='text-green-500'><FaCheckDouble /></span>
                        <p>Digital Marketing</p>
                    </li>
                    <li className='py-2 flex gap-2 items-center'>
                        <span className='text-green-500'><FaCheckDouble /></span>
                        <p>MERN Stack Web</p>
                    </li>
                    <li className='py-2 flex gap-2 items-center'>
                        <span className='text-green-500'><FaCheckDouble /></span>
                        <p>Real Time Database</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Knoledge;
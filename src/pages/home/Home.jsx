import React, { useEffect, useState } from 'react';
import Profile from './profile/Profile';
import Aside from '../sideNavigation/Aside';
import { Outlet } from 'react-router-dom';
import LoadingSpninner from '../../hooks/LoadingSpninner';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous task
        setTimeout(() => {
            setIsLoading(false); // Set loading state to false after a delay
        }, 2000); // Change the delay time as needed
    }, []);
    return (
        <div className='grid grid-cols-3 my-container items-center pt-10'>
            {
                isLoading ? <LoadingSpninner></LoadingSpninner> :
                    <>
                        <Profile></Profile>
                        <div className='col-span-2 border h-[420px] bg-white text-black px-4 overflow-scroll'>
                            <Outlet></Outlet>
                        </div>
                        <div className='absolute top-16 left-20'>
                            <Aside></Aside>
                        </div>
                    </>
            }
        </div>
    );
};

export default Home;
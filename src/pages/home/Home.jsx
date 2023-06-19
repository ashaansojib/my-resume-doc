import React, { useEffect, useState } from 'react';
import Profile from './profile/Profile';
import Aside from '../sideNavigation/Aside';
import { Outlet } from 'react-router-dom';
import LoadingSpninner from '../../hooks/LoadingSpninner';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
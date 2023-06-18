import React from 'react';
import Profile from './profile/Profile';
import Aside from '../sideNavigation/Aside';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='grid grid-cols-3 my-container items-center pt-10'>
            <Profile></Profile>
            <div className='col-span-2 border h-[420px]'>
                <Outlet></Outlet>
            </div>
            <div className='absolute top-16 left-20'>
                <Aside></Aside>
            </div>
        </div>
    );
};

export default Home;
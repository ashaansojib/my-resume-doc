import React from 'react';
import Profile from './profile/Profile';
import Aside from '../sideNavigation/Aside';

const Home = () => {
    return (
        <div className='grid grid-cols-3 my-container'>
            <Profile></Profile>
            <div className='col-span-2 border mt-4'>
                <h2>content area</h2>
            </div>
            <div className='absolute top-16 left-20'>
                <Aside></Aside>
            </div>
        </div>
    );
};

export default Home;
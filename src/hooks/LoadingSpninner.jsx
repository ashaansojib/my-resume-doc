import React from 'react';
import { ScaleLoader } from 'react-spinners';

const LoadingSpninner = () => {
    return <div className='absolute top-2/4 left-2/4 max-h-screen'> <ScaleLoader color="#d63636" /></div>
};

export default LoadingSpninner;
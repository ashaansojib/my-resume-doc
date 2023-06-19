import React from 'react';

const Clients = () => {
    return (
        <>
            <h2 className='text-2xl font-medium border-b py-4'><span className='text-green-500'>C</span>lients</h2>
            <div className='grid grid-cols-4 gap-4'>
                <div className='p-4'>
                    <img src="https://bslthemes.com/html/ryan/images/clients/client_1.png" alt="" />
                </div>
                <div className='p-4'>
                    <img src="https://bslthemes.com/html/ryan/images/clients/client_2.png" alt="" />
                </div>
                <div className='p-4'>
                    <img src="https://bslthemes.com/html/ryan/images/clients/client_3.png" alt="" />
                </div>
                <div className='p-4'>
                    <img src="https://bslthemes.com/html/ryan/images/clients/client_4.png" alt="" />
                </div>
            </div>
        </>
    );
};

export default Clients;
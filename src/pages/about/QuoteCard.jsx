import React from 'react';

const QuoteCard = () => {
    return (
        <>
            <h2 className='text-2xl font-medium border-b py-4'><span className='text-green-500'>Q</span>uotes</h2>
            <div className='text-center p-4'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et illum ducimus recusandae doloribus odio, adipisci ratione ab eos officia nobis! Ad officia ipsam, quisquam ducimus architecto magnam est laborum deleniti.</p>
                <div className="avatar pt-4">
                    <div className="w-24 rounded-full">
                        <img src="https://i.ibb.co/wgstTQ2/unnamed.png" />
                    </div>
                </div>
                <h2 className='text-xl font-medium text-black'>Ashaduzzaman Sojib</h2>
                <p>MERN Stack Web Developer</p>
            </div>
        </>
    );
};

export default QuoteCard;
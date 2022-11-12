import React from 'react';

const Info = () => {
    return (
        <div className='mt-8'>
            <h2 className='text-4xl font-semi-bold'>Shakil Hassan</h2>
            <p className='mt-1 text-slate-400'>Dhaka, Bangladesh</p>
            <div className='mt-24'>
                <h2 className='text-4xl font-semibold'>Add a Break</h2>
            </div>
            <div className='bg-slate-300 p-4 m-12 rounded-lg'>

                <button className='drop-shadow-md hover:bg-green-500 bg-white p-3 rounded-full mr-5 ml-2'>10m</button>
                <button className='drop-shadow-md hover:bg-green-500 bg-white p-3 rounded-full mr-5'>20m</button>
                <button className=' drop-shadow-md hover:bg-green-500 bg-white p-3 rounded-full mr-5'>30m</button>
                <button className='drop-shadow-md hover:bg-green-500 bg-white p-3 rounded-full mr-5'>40m</button>


            </div>
            <div>
                <h2 className='text-4xl font-semibold'>Exercise Details</h2>
            </div>
            <div className='text-2xl bg-slate-300 p-4 m-12 rounded-lg'>

                <div className='flex flex-row gap-12'>
                    <h3 className='font-semibold'>Exercise Time</h3>
                    <h3 className='text-slate-400 ml-3'><span>00</span><span className='ml-2'>Minutes</span></h3>



                </div>



            </div>
            <div className=' text-2xl bg-slate-300 p-4 m-12 rounded-lg'>

                <div className='flex flex-row gap-12'>
                    <h3 className='font-semibold'>Break Time</h3>
                    <h3 className='text-slate-400 ml-9'><span>00</span><span className='ml-2'>Minutes</span></h3>



                </div>



            </div>



            <button className='bg-indigo-500 rounded-lg p-5 mt-12'><h2 className='text-white text-2xl'>Activity Completed</h2></button>


        </div>

    );
};

export default Info;
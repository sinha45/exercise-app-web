import React from 'react';

const Card = () => {


    return (

        <div className='w-72 h-80  rounded-lg bg-white shadow-lg'>

            {/* <img src=  alt="" /> */}


            {/* <h4 className='text-2xl font-semibold mt-2 ml-0'>Subject:{props.cosmetic.subName}</h4> */}

            <p className='text-xl font-semibold mt-2'>For Class:</p>
            <p className='text-xl font-semibold mt-2'>Time required:</p>


            <button className='bg-indigo-500 m-8 rounded-lg p-2 mt-3'>
                <p className='text-white font-semibold'>Add to List</p>

            </button>

        </div>
    );
};

export default Card;
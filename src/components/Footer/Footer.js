import React from 'react';

const Footer = () => {
    return (
        <div className='mt-24'>
            <h1 className='text-5xl font-semibold'>Ans of 3 Question</h1>
            <div className='mt-36 w-3/4 m-auto'>
                <h3 className='text-2xl font-semibold text-cyan-400 mt-28'>How Does React Work???</h3>
                <p className='mt-12 bg-gray-500 rounded-lg'>It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks.</p>
            </div>
            <div className='mt-5 w-3/4 m-auto'>
                <h3 className='text-2xl font-semibold text-cyan-400 mt-28'>What's the difference between props and state in react???</h3>
                <p className='mt-12 bg-gray-500 rounded-lg'>While both hold information that influences the output of render, they are different in one important way: props get passed to the component whereas state is managed within the component.props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes. I think what is meant by "props should not be changed" is that they should not be changed by children components.</p>
            </div>
            <div className='mt-5 w-3/4 m-auto'>
                <h3 className='text-2xl font-semibold text-cyan-400 mt-28'>What is the use of Useeffect other than loading data???</h3>
                <p className='mt-12 bg-gray-500 rounded-lg'>We can use useEffect to filter an array "on the fly" by typing letters into an input element. To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect that will be triggered when the input changes, thanks to useEffect dependencies.</p>
            </div>
        </div>
    );
};

export default Footer;
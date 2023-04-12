import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container blog px-4'>

            <h3 className='mt-4 pt-5'>1. When Context API should use?</h3>
            <h5 className='fw-normal pt-1'> <span className='fw-bold'>Ans: </span> If some data needs to access by many different nesting components and wants to avoid passing some props through many levels, then context Api should use.</h5>


            <h3 className='mt-4'>2.What is React Custom Hook?</h3>
            <h5 className='fw-normal'><span className='fw-bold'>Ans: </span> React Custom Hook is a reusable function that use to add unique functionality to React application, </h5>


            <h3 className='mt-4'>3. What is useRef? What does it works?</h3>
            <h5 className='fw-normal'><span className='fw-bold'>Ans: </span> useRef ia a built in react hook which can accepts one argument as the initial value. This hook returns only one item and allows to persist values between renders. It returns  returns a mutable ref object whose (.current) property is initialized to the passed argument</h5>


            <h3 className='mt-4'>4. What is useMemo? What does it works?</h3>
            <h5 className='fw-normal pb-5'><span className='fw-bold'>Ans: </span> It's a function that returns memoized value of a passed in resource intensive function. To optimize the performance of a react component by eliminating repeating heavy computations, then this useMemo() function used. </h5>            
        </div>
    );
};

export default Blog;
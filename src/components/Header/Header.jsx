import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='header '>
                <div className='d-flex  justify-content-between container'>
                    <h2 className=''>Hello</h2>
                    <nav>
                        <ul className='d-flex  justify-content-between container'>
                            <li>Statistics</li>
                            <li>Applied Jobs</li>
                            <li>Blog</li>
                        </ul>
                    </nav>
                    <button>Start Applying</button>
                </div>
               
            </div>
        </>
    );
};

export default Header;
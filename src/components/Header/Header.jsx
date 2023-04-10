import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <Link to="/statistics">Statistics</Link>
                            <Link to="/applied">Applied Jobs</Link>
                            <Link to="/blog">Blog</Link>
                        </div>


                        <button className="btn " type="submit">Search</button>
                    </div>
                </div>
            </nav>


            <div className='container d-flex justify-content-between mt-5 pt-3'>
                    <div className='ms-5'>
                        <h1>One Step <br /> Closer To Your <br />
                            <span className='span1'> Dream Job</span></h1>

                        <p className='mt-3 text-secondary'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className='mt-3' type="submit">Get Started</button>
                    </div>

                    <div>
                        <img src="../../Icons/P3OLGJ1 copy 1.png" alt="" />
                    </div>
                </div>



        </div>


    );
};

export default Header;
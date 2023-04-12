import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary container">
                <div className="container-fluid">
                    <a className="navbar-brand fs-2 fw-bold " href="#">Oplor</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='navbar-nav me-auto mb-2 mb-lg-0 '>
                            <Link to="/" >Home</Link>
                            <Link to="/statistics" >Statistics</Link>
                            <Link to="/applied">Applied Jobs</Link>
                            <Link to="/blog">Blog</Link>
                        </div>


                        <button className="btn text-white py-2" type="submit">Star Applying</button>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;
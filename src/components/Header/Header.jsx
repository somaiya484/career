import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            {/* <div classNameName='header '>
                <div className='d-flex  justify-content-between container '>
                    <h2 className='mt-4'>Olpor</h2>
                    <nav className='mt-4 pt-2'>
                        <ul className='d-flex  justify-content-between container  me-5'>
                            <li className='list-one pe-3'>Statistics</li>
                            <li className='pe-3'>Applied Jobs</li>
                            <li>Blog</li>
                        </ul>
                    </nav>
                    <button className='mt-4'>Start Applying</button>
                </div>
            </div> */}


            <div className='header'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand me-5 pe-5" href="#">Olpor</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="list-one nav-link active " aria-current="page" href="#">Statistics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Applied Jobs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Blog</a>
                                </li>
                            </ul>
                            <button type="submit">Start Applying</button>

                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
};

export default Header;
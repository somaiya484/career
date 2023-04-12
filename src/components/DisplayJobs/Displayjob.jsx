import React from 'react';
import { Link } from 'react-router-dom';
import "./Displayjob.css"

const Displayjob = ({ job }) => {
    const { img, sector, companyName, location, salary, jobCategory } = job;
    return (
        <div className='container job-container'>
            <div className='cart d-flex my-4'>
                <div className='img-div'>
                    <img src={img} />
                </div>
                <div className='review-details'>
                    <h4 className='job-title'>{sector}</h4>
                    <h5 className='light-dark'>{companyName}</h5>
                    <div className='d-flex gap-2'>
                        <div>
                            <h6 className='job-T-T'>{jobCategory}</h6>
                        </div>
                        <button className='featuresBtn ms-3'>Full Time</button>
                    </div>
                    <div className='d-flex gap-4'>
                        <h5 className='light-dark'>{location}</h5>
                        <h5 className='light-dark'>Salary: {salary}</h5>
                    </div>
                </div>
                <Link to={`/jobs/${id}`}>
                    <button className='d-block mt-3 btn text-white fw-semibold'>View Details </button>
                </Link>
            </div>
        </div>
    );
};

export default Displayjob;



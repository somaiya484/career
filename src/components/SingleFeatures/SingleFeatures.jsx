import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import "./SingleFeatures.css"
import { addToDb } from '../utilies/fakeDb';

const SingleFeatures = () => {
    const handleProducts = (product) => {
        addToDb(product.id)
    }
    const { jobId } = useParams();
    const [displayFeatures, setDisplayFeatures] = useState(null);

    const features = useLoaderData();
    useEffect(() => {
        const findData = features.filter(feature => feature.id == jobId);
        if(findData.length){
            setDisplayFeatures(findData[0]);
        }
    }, [])
    return (
        <div>
            <div className='featureHeader'>
                <h3 >Job Details</h3>
            </div>

            <div className='container my-5'>
                {
                    displayFeatures !== null &&
                    <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                            <div className="card ">
                                <div className="card-body cardbody1">
                                    <p>Job Description:<span>{displayFeatures.jobDescription}</span></p>
                                    <p>Job Responsibility:<span>{displayFeatures.jobResponsibility}</span></p>
                                    <p>Educational Requirements:
                                        <br />
                                        <span>{displayFeatures.education}</span>
                                    </p>
                                    <p>Experiences:
                                        <br />
                                        <span>{displayFeatures.Experience}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mt-5 pt-2">
                            <div className="card card2">
                                <div className="card-body">
                                    <h5 className="card-title fw-bolder fs-5">Job Details</h5>
                                    <p className='fw-bold mt-3'>Salary: <span>{displayFeatures.salary}</span></p>
                                    <p className='fw-bold'>Job Title: <span>{displayFeatures.sector}</span></p>

                                    <h5 className="card-title mt-4 fw-bolder fs-5">Contact Information</h5>
                                    <p className='fw-bold'>Phone: <span>{displayFeatures.phone}</span></p>
                                    <p className='fw-bold'>Email: <span>{displayFeatures.email}</span></p>
                                    <p className='fw-bold'>Address: <span>{displayFeatures.location}</span></p>
                                    <Link to="/applied">
                                        <button onClick={() => handleProducts(displayFeatures)} className="w-100 btn mt-3 text-white fw-semibold">Apply Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default SingleFeatures;
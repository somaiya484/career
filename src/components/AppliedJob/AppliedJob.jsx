import React, { useEffect, useState } from 'react';
import "./AppliedJob.css"
import { getShoppingCart } from '../utilies/fakeDb';
import Displayjob from '../DisplayJobs/Displayjob';

const AppliedJob = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('featurs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    const data = getShoppingCart();
    const savedJob = [];
    for (const id in data) {
        const addedJob = jobs.find(
            pd => pd.id === id);
        if (addedJob) {
            savedJob.push(addedJob);
        }
    };
    return (
        <div>
            <div className='AppliedHeader'>
                <h3 >Applied Jobs</h3>
            </div>
            {
                savedJob.map(job => <Displayjob key={job.id} job={job}></Displayjob>)
            }
        </div>
    );
};

export default AppliedJob;
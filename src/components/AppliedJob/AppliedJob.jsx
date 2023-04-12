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
    const storedJob = [];
    for (const idNo in data) {
        const setJob = jobs.find(
            pd => pd.id === idNo);
        if (setJob) {
            storedJob.push(setJob);
        }
    };
    return (
        <div>
            <div className='AppliedHeader'>
                <h3 >Applied Jobs</h3>
            </div>
            {
                storedJob.map(job => <Displayjob key={job.id} job={job}></Displayjob>)
            }
        </div>
    );
};

export default AppliedJob;
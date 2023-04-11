import React, { useEffect, useState } from 'react';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';

const SingleFeatures = () => {
    const {jobId} = useParams();
//    const [features] = useOutletContext();
    const [displayFeatures, setDisplayFeatures] = useState([]); 
    const features = useLoaderData();
    console.log(features);
    useEffect(() => {
        const findData = features.find(feature => feature.id == jobId);
        setDisplayFeatures(findData);
    }, [])
    // const findData = features.find(feature => feature.id == jobId);
    // console.log(findData)
    console.log(jobId)
    return (
        <div>
            <h1>{displayFeatures.sector}</h1>
            <h1>Lorem ipsum dolor sit.</h1>
        </div>
    );
};

export default SingleFeatures;
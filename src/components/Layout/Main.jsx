import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch("/featurs.json")
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Outlet>

                </Outlet>
            </div>

        </div>
    );
};

export default Main;
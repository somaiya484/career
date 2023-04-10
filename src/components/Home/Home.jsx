import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            


            <h2>This is how: {categories.length}</h2>
        </div>
    );
};

export default Home;
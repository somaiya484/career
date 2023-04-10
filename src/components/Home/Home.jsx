import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Feature from '../Features/Feature';

const Home = () => {
    const categories = useLoaderData();
    const features = useLoaderData();
    return (
        <div>
            <div>
                <h2 className='text-center mt-5 pt-5 fw-bold fs-1'>Job Category List</h2>
                <p className='mt-2 text-secondary text-center mx-1'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="categories container mt-4">
                <div className="category row row-cols-1 row-cols-md-4 g-4 ">
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>

            <div>
                <h2 className='text-center mt-5 pt-5 fw-bold fs-1'>Featured Jobs</h2>
                <p className='mt-2 text-secondary text-center mx-1'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="features container mt-4">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        features.map(feature => <Feature key={feature.id}
                            feature={feature}
                        ></Feature>)
                    }
                </div>
            </div>



        </div>
    );
};

export default Home;
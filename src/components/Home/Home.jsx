import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Feature from '../Features/Feature';
import { useEffect, useState } from 'react';
import "./Home.css"


const Home = () => {
    const categories = useLoaderData();
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch("featurs.json")
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    // console.log(features)
    return (
        <div>
            <div className='home  d-flex justify-content-between '>
                <div className='container mt-5'>
                    <h1>One Step <br /> Closer To Your <br />
                        <span className='span1'> Dream Job</span></h1>

                    <p className='mt-3 text-secondary'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='mt-3 btn' type="submit">Get Started</button>
                </div>

                <div>
                    <img src="../../Icons/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>

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
                <div className="feature row row-cols-1 row-cols-md-2 g-4 mt-4">
                    {
                        // features.map(feature => console.log(feature))
                        features.map(feature => {
                            return (
                                <Feature key={feature.id}
                                    feature={feature}
                                ></Feature>
                            )
                        })
                    }

                </div>
                <div className='mx-auto'>

                <button className='my-5 btn'>See All Jobs</button>
                </div>
            </div>



        </div>
    );
};

export default Home;
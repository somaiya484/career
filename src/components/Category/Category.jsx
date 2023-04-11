import React from 'react';
import './Category.css'

const Category = ({ category }) => {
    const { name, amountOfJob, img } = category;
    return (
        <div>
            <div className="col">
                <div className="card h-100 singleCard">
                    <img src={img} className="card-img-top w-25 ms-2" alt="..." />
                    <div className="card-body">
                        <h5 className="text-start card-title">{name}</h5>
                        <p className="text-start card-text text-secondary">{amountOfJob}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
import React from 'react';

const Category = ({ category }) => {
    const { name, amountOfJob } = category;
    return (
        <div>

            {/* <div className=""> */}
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="text-start card-title">{name}</h5>
                            <p className="text-start card-text">{amountOfJob}</p>
                        </div>
                    </div>
                </div>
            {/* </div> */}

        </div>
    );
};

export default Category;
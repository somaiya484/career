import { Link } from 'react-router-dom';
import './Feature.css'

const Feature = ({ feature }) => {
    const { id, sector, companyName, location, salary, jobCategory, img } = feature;

    return (
        <div>
            <div className="col">
                <div className="card featuresCard">
                    <img src={img} className="card-img-top w-50 ms-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{sector}</h5>
                        <p className="card-text text-secondary fw-bold">{companyName}</p>
                        <button className='featuresBtn'>{jobCategory}</button>
                        <button className='featuresBtn ms-3'>Full Time</button>
                        <div className='d-flex mt-2 fs-6'>
                            <p className="card-text text-secondary">{location}</p>
                            <p className="card-text text-secondary ms-4">$Salary: {salary}</p>
                        </div>

                        <Link to={`/jobs/${id}`}>
                            <button className='d-block mt-3 btn text-white fw-semibold'>View Details </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;
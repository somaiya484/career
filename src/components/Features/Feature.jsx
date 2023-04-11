import { Link } from 'react-router-dom';
import './Feature.css'

const Feature = ({ feature }) => {
    const {id, sector, companyName, location, salary, jobCategory, img } = feature;
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{sector}</h5>
                        <p class="card-text">{companyName}</p>
                        <Link to= {`/jobs/${id}`}>                                <button>See details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Feature;
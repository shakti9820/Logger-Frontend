import React from 'react'
import { Link } from 'react-router-dom';
import './Injecterwithfilter.css';

const InjecterWithFilter = () => {
    return (
        <div className="button-container">
            {/* <div>Shakti singh</div> */}
            <Link to="/injecter">
                <button className="custom-button">Injecter</button>
            </Link>
            <Link to="/filter">
                <button className="custom-button">Filter</button>
            </Link>
        </div>
    );
}

export default InjecterWithFilter
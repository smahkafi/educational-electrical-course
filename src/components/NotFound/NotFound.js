import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="text-uppercase"> 404 error</h1>
            <h2 className="text-uppercase">
                Opps! Page not found
            </h2>
            <p className="text-capitalize">
                sorry, the page you're loking for doesn't exist. If you think something is broken, report a Problem.
            </p>

            <div>
                <button className="btn btn-primary">
                    <Link className="menu-link " to="/home">
                        Return home
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;
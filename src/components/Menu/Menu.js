import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div>
                            <h2>logo</h2>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="menu-container">
                            <ul className="d-flex justify-content-end align-items-end">
                               <Link to="/home">Home</Link>
                               <Link to="/about">About</Link>
                               <Link to="/services">Services</Link>
                               <Link to="/partners">Partners</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <div className="bg-info">
            <div className="container nav-bg-color fixed-top">
                <div className="row align-self-center">
                    <div className="col-3">
                        <div>
                            <Link className="menu-link" to="/home">
                            <img className="logo" src={`https://banner2.cleanpng.com/20180330/rve/kisspng-electricity-computer-icons-symbol-company-electric-electric-5abdc00c68c5a8.0630823215223849084292.jpg`} alt="" />
                            </Link>   
                        </div>
                    </div>
                    <div className="col-5">
                        
                    </div>
                    <div className="col-4">
                        <div className="menu-container">
                            <ul className="d-flex justify-content-around justify-content-center align-self-center">
                               <Link className="menu-link" to="/home">Home</Link>
                               <Link className="menu-link" to="/about">About</Link>
                               <Link className="menu-link" to="/services">Services</Link>
                               <Link className="menu-link" to="/partners">Partners</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div className="container">
            <h2 className="text-center">
                About Us
            </h2>
            <h2>
            Take free online courses in solar, nuclear and other forms of energy. Learn about worldwide energy development and the impact of energy production and use on the environment.
            </h2>
            
            <h3>
                <span className="text-info pe-2">
                    Related topics:
                </span> 
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Agriculture</Link>
                    </span> |  
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Biorefinery</Link>
                    </span> |  
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Chemistry</Link>
                    </span> |  
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Sciences</Link>
                    </span> |  
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Earth</Link>
                    </span> |  
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Electric Cars</Link>
                    </span> |  
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Electricity</Link>
                    </span> |  
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Nature</Link>
                    </span> |  
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Oil</Link>
                    </span> |  
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Solar Energy</Link>
                    </span> | 
                    <span className="related">
                        <Link  to="/" className=" related2 text-secondary">Nuclear Energy</Link>
                    </span>
            </h3>
        </div>
    );
};

export default About;
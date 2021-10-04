import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div className="container about-container">
           <div className="row mt-5 ">
               <div className="col-6 justify-content-center align-self-center ">
                    <h2 className="text-center about-css">About Us</h2>
               </div>
               <div className="col-6">
                    <h2>Every individual has the potential to create change, whether in their life, their community, or the world. The transformative power of education is what unlocks that potential. Yet, access to high-quality education has been a privilege of the few. Back in 2012, we realized it was a time for a seismic shift in learning. From the tried and true to the leading edge. From “for some” to “for all.” By opening the classroom through online learning, edX empowers millions of learners to unlock their potential and become changemakers.</h2>
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
           </div>
        </div>
    );
};

export default About;
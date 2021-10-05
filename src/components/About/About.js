import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div className="container pt-5">
           <div className="row mt-5 about-container about-radious">
               <div className="col-md-5 col-lg-5 justify-content-center align-self-center ">
                    <h2 className="text-center about-css">About Us</h2>
               </div>
               <div className="col-7 justify-content-center align-self-center">
                    <h4>Every individual has the potential to create change, whether in their life, their community, or the world. The transformative power of education is what unlocks that potential. Yet, access to high-quality education has been a privilege of the few. Back in 2012, we realized it was a time for a seismic shift in learning. From the tried and true to the leading edge. From “for some” to “for all.” By opening the classroom through online learning, edX empowers millions of learners to unlock their potential and become changemakers.</h4>
                </div>
           </div>
           <hr />

           <div className="mission about-container about-radious">
               <div className="row">
                   <div className="col-md-5 col-lg-5 justify-content-center align-self-center">
                       <img className="mission-img mission-margin"  src={`https://www.edx.org/images/about_us/impact.png`} alt="" />
                   </div>
                   <div className="col-lg-7 misson-content">
                       <h2 className="">Our Mission</h2>
                       <p> There are three commitments we've made to the world. We've been grounded by these since day one: Increase access to high-quality education for everyone, everywhere Enhance teaching and learning on campus and online Advance teaching and learning through research</p>
                   </div>
               </div>
           </div>
            <hr />

            <div className="rate mt-5 py-5 about-container about-radious">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>3000+</h2>
                        <p>courses</p>
                    </div>
                    <div className="col-4">
                        <h2>110 million</h2>
                        <p>enrollments</p>
                    </div>
                    <div className="col-4">
                        <h2>35 million</h2>
                        <p>users</p>
                    </div>
                    <hr />
                    <div className="col-4">
                        <h2>160</h2>
                        <p>partners</p>
                    </div>
                    <div className="col-4">
                        <h2>15 thousand</h2>
                        <p>instructors</p>
                    </div>
                    <div className="col-4">
                        <h2>1.4 million</h2>
                        <p>verified course certificates issued</p>
                    </div>
                </div>
            </div>
            <hr />


        {/* related course */}
            <h3 className="mt-5 about-container about-radious py-2">
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
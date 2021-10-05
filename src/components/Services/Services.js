import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(()=> {
        fetch('./allcourse.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    console.log(setServices);
    return (
        
        <div className="services-background">
            <div className="container">
            <div className="service-card">
            {
                services.map(service => 
                <div className="service row d-flex border border-primary div-services mb-4">
                        <div className="col-5 justify-content-center align-self-center">
                            <img className="border border-danger" src={service.img} alt="" />
                        </div>
                        
                        <div className="col-7 boder mt-3">
                            <h2 className="text-center">        <span>
                                            {service.name} {service.subName} {service.subName2}
                                        </span>         
                            </h2>
                            <br />
                            <h6>Id: {service.courseID}</h6>
                            <h6>Category: <span className="text-warning">{service.category}</span></h6>
                            <h6>Course Maker: {service.courseMaker}</h6>
                            <h6>Course Qantity: {service.cousreQantity}</h6>
                            <h6>ProgramBadge: {service.programBadge}</h6>
                            <h6>Duration: {service.duration}</h6>
                            <h6>Fees: $ {service.fee}</h6>
                            <div className="mt-2 d-flex">
                                <div className="col-4 justify-content-center align-self-center">
                                    <h4 className="description-title">
                                        {service.descriptions.descriptionTitle}?
                                    </h4>
                                </div>
                                <div className="col-8 justify-content-center align-self-center">
                                    <h6>* {service.descriptions.details2}</h6>
                                    <h6>* {service.descriptions.details3}</h6>
                                    <h6>* {service.descriptions.details1}</h6>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="btn btn-primary enroll-btn">
                            <Link className="text-white text-uppercase text-decoration-none " to="/home">Enroll Now</Link>
                        </div>
                </div>
                )
            }
            </div>
        </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
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
        
        <div className="bg-info">
            <div className="container">
            {
                services.map(service => <div className="service row d-flex border border-primary mt-5 bg-secondary">
                        <div className="col-5 justify-content-center align-self-center">
                            <img className="" src={service.img} alt="" />
                        </div>
                        
                        <div className="col-7 boder">
                            <h5>Id: {service.courseID}</h5>
                            <h2>Name:   <span>
                                            {service.name}
                                        </span> <br />
                                        <span>
                                            {service.subName}
                                        </span>
                                        <span>
                                            {service.subName2}
                                        </span> <br />
                            </h2>
                            <h4>Catagory: {service.catagory}</h4>
                            <h4>Course Maker: {service.courseMaker}</h4>
                            <h4>Vouse Qantity: {service.couseQantity}</h4>
                            <h4>ProgramBadge: {service.programBadge}</h4>
                            <h4>Duration: {service.duration}</h4>
                            <h4>Fees: $ {service.fee}</h4>
                            <h4>descriptions:</h4>
                            <div className="mt-3 d-flex">
                                <div className="col-4 justify-content-center align-self-center">
                                    <h2>
                                        {service.descriptions.descriptionTitle}
                                    </h2>
                                </div>
                                <div className="col-8 justify-content-center align-self-center">
                                    <p>{service.descriptions.details1}</p>
                                    <p>{service.descriptions.details2}</p>
                                    <p>{service.descriptions.details3}</p>
                                </div>
                            </div>
                        </div>
                </div>
                )
            }
        </div>
        </div>
    );
};

export default Services;
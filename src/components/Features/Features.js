import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import './Feature.css'

const Features = () => {
    const [features, setFeatures] = useState([])
    useEffect(()=>{
        fetch('./highlight.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <h1 className="my-5">Feature Popular <span className="text-warning">Courses</span></h1>
           <div className="container">
           <div className="row">
           { 
            features.map(feature => 
            <div className="col-3 feature ">
                    <div className="card feature-card">
                        <div className="img">
                        <img src={feature.img} className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Course Name: {feature.name}</h5>
                            <p className="card-text">Fee: $ {feature.fee}</p>
                            <p className="card-text">Course Qantity: {feature.cousreQantity}</p>
                            <p className="card-text">Duration: {feature.duration}</p>
                        </div>
                    </div>
            </div>)
           }
           </div>
           </div>
        </div>
    );
};

export default Features;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <div className="col-md-3 feature ">
                        <div class="card feature-card">
                            <div className="img">
                                <img src={feature.img} className="card-img-top" alt="..."/>
                            </div>
                            <div class="card-body">
                                <h5 className="card-title">{feature.name}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item card-text">Fee: $ {feature.fee}</li>
                                <li class="list-group-item card-text">Course Qantity: {feature.cousreQantity}</li>
                                <li class="list-group-item card-text">Duration: {feature.duration}</li>
                            </ul>
                            <div class="card-body">
                                <button>
                                <Link to="/services" className="text-uppercase">see more</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    )
            }
                </div>
            </div>
        </div>
    );
};

export default Features;


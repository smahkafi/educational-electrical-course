import React, { useEffect, useState } from 'react';
import './Partners.css'

const Partners = () => {
    const [partners, setPartners] = useState([])

    useEffect(()=>{
        fetch('./partners.json')
        .then(res => res.json())
        .then(data => setPartners(data))
    },[])
    return (
        <div className="container">
            <h2 className="mt-5 bg-secondary py-4">
            <span className="text-white"> Schools </span> <span className="text-warning">Partners</span>
            </h2>
            <div className="row">
            {
                partners.map(partner => 
                        <div key={partner.id} className="col-3 mt-3 mb-3">
                            <div className="card border border-secondary partner rounded" style={{width: "18rem"}}>
                                <div>
                                    <img src={partner.img} className="card-img-top" alt="..."/>
                                </div>
                                <div className="card-body body">
                                    <h5 className="card-title">{partner.name}</h5>
                                    <p className="card-text">{partner.role}</p>
                                </div>
                            </div>
                        </div>
                    )
            }
            </div>
            
        </div>
    );
};

export default Partners;
import React, { useEffect, useState } from 'react';

const Partners = () => {
    const [partners, setPartners] = useState([])

    useEffect(()=>{
        fetch('./partners.json')
        .then(res => res.json())
        .then(data => setPartners(data))
    },[])
    return (
        <div className="container">
            <h2>
            Schools Partners
            </h2>
            {
                partners.map(partner => 
                    <div className="row d-flex">
                        <div className="col-4">
                            <div className="card" style={{width: "auto"}}>
                                <div>
                                    <img src={partner.img} className="card-img-top" alt="..."/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{partner.name}</h5>
                                    <p className="card-text">{partner.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
            }
            
        </div>
    );
};

export default Partners;
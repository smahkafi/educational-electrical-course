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
            <div className="row">
            {
                partners.map(partner => 
                        <div className="col-4 mt-3">
                            <div className="card" style={{width: "18rem"}}>
                                <div>
                                    <img src={partner.img} className="card-img-top" alt="..."/>
                                </div>
                                <div className="card-body">
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
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';

const Features = () => {
    const [features, setFeatures] = useState([])
    useEffect(()=>{
        fetch('./highlight.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])
    console.log(setFeatures);
    return (
        <div>
            <Banner></Banner>
           { 
            features.map(feature => <div>
                <div className="home">
                    <div className="card" style={{width: "18rem"}}>
                        <div className="img">
                        <img src={feature.img} className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button>Go Anywhare</button>
                        </div>
                    </div>
                </div>

            </div>)
           }
        </div>
    );
};

export default Features;
import React, { useEffect, useState } from 'react';

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
           { 
            features.map(feature => <div>
                <div className="home">
                    
                </div>

            </div>)
           }
        </div>
    );
};

export default Features;
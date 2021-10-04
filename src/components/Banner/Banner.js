import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div class="hero-image">
                <div class="hero-text">
                    <h1 className="text-uppercase">Make Master</h1>
                    <h4 className="text-uppercase font-weight-bold">Build Your skills & make a master your self</h4>
                    <button className="text-uppercase buton border border-info mt-3">enroll here</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
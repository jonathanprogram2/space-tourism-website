import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h5>So, you want to travel to</h5>
                    <h1 className="bellefair-regular">Space?</h1>
                    <div className="text-background">
                        <p>
                            Let's face it; if you want to go to space, you might as well genuinely go to outer space – and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
                        </p>
                    </div>
                </div>
                <div className="hero-cta">
                    <button className="explore-btn">Explore</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
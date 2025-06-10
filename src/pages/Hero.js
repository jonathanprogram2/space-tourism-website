import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Hero.css';

function Hero() {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/destination');
    };

    return (
        <section 
            className="hero"
            style={{
                backgroundImage: "url('/assets/home/background-home-desktop.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }} 
        >
            <div className="hero-content">
                <div className="hero-text">
                    <h5 className="barlow-condensed-regular">So, you want to travel to</h5>
                    <h1 className="bellefair-regular">Space?</h1>
                    <div className="barlow-condensed-regular">
                        <p>
                            Let's face it; if you want to go to space, you might as well genuinely go to outer space – and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
                        </p>
                        <div className="hero-divider"></div>
                    </div>
                </div>
            </div>
            <div className="hero-cta">
                <button className="explore-btn" onClick={handleExploreClick}>EXPLORE</button>
            </div>
        </section>
    );
}

export default Hero;
import React, { useState, useEffect } from 'react';
import '../components/destination.css';
import data from '../data/data.json';

function Destination() {
    const [currentPlanet, setCurrentPlanet] = useState(data.destinations[0]);

    const handlePlanetClick = (planetName) => {
        const selected = data.destinations.find(dest => dest.name === planetName);
        setCurrentPlanet(selected);
    };

    return (
        <div 
            className="destination-page"
            style={{
                backgroundImage: "url('/assets/destination/background-destination-desktop.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
            <h5><span>01</span> Pick your destination</h5>

            <div className="destination-content">
                <img src={`/${currentPlanet.images.png}`} alt={currentPlanet.name} />
            

                <div className="destination-info">
                    <ul className="planet-tabs">
                        {data.destinations.map(dest => (
                            <li
                                key={dest.name}
                                className={dest.name === currentPlanet.name ? 'active' : ''}
                                onClick={() => handlePlanetClick(dest.name)}
                            >
                                {dest.name.toUpperCase()}
                            </li>
                        ))}
                    </ul>

                    <h1>{currentPlanet.name}</h1>
                    <p>{currentPlanet.description}</p>

                    <div className="destination-stats">
                        <div>
                            <h6>Avg. Distance</h6>
                            <p>{currentPlanet.distance}</p>
                        </div>
                        <div>
                            <h6>Est. Travel Time</h6>
                            <p>{currentPlanet.travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
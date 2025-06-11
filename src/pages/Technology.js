import React, { useState } from 'react';
import data from '../data/data.json';
import '../components/technology.css';

function Technology() {
    const [currentTechIndex, setCurrentTechIndex] = useState(0);
    const tech = data.technology[currentTechIndex];

    return (
        <div className="technology-page"
            style={{
                backgroundImage: "url('/assets/technology/background-technology-desktop.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                width: '100vw',
                overflowX: 'hidden'
            }}
        >
            <h5><span>03</span> Space launch 101</h5>

            <div className="technology-content">
                <div className="tech-selector">
                    {data.technology.map((_, idx) => (
                        <button
                            key={idx}
                            className={idx === currentTechIndex ? 'active' : ''}
                            onClick={() => setCurrentTechIndex(idx)}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>

                <div className="technology-info">
                    <h6>The terminology...</h6>
                    <h1>{tech.name.toUpperCase()}</h1>
                    <p>{tech.description}</p>
                </div>

                <div className="technology-image">
                    <img src={`/${tech.images.portrait}`} alt={tech.name} />
                </div>
            </div>
        </div>
    );
}

export default Technology;
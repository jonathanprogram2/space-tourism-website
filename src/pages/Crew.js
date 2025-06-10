import React, { useState } from 'react';
import data from '../data/data.json';
import '../components/crew.css';

function Crew() {
    const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
    const crew = data.crew[currentMemberIndex];

    return (
        <div className="crew-page"
            style={{
                backgroundImage: "url('/assets/crew/background-crew-desktop.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh', 
                width: '100vw',
                overflowX: 'hidden'
            }}
        >
            <h5><span>02</span> Meet your crew</h5>

            <div className="crew-content">
                <div className="crew-info">
                    <h4>{crew.role.toUpperCase()}</h4>
                    <h1>{crew.name.toUpperCase()}</h1>
                    <p>{crew.bio}</p>

                    <div className="dot-nav">
                        {data.crew.map((_, idx) => (
                            <button
                                key={idx}
                                className={idx === currentMemberIndex ? 'active' : '' }
                                onClick={() => setCurrentMemberIndex(idx)}
                            />
                        ))}
                    </div>
                </div>

                <div className="crew-image">
                    <img src={`/${crew.images.png}`} alt={crew.name} />
                </div>
            </div>
        </div>
    );
}

export default Crew;
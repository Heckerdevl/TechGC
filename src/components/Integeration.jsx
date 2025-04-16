import React from 'react';
import './Integeration.css';
import integrationImage from '../assets/INT.avif'; 

function Integeration() {
  return (
    <section className="integration-section row-layout"> 
      <div className="integration-text-column">
        <h2>Integrate Your 3D Design with Anything You Want</h2>
        <p>
          Effortlessly blend the power of our 3D design software with a leading no-code web
          builder. Unleash creativity seamlessly by integrating cutting-edge 3D capabilities
          into popular no-code web development platforms.
        </p>
        <button className="more-info-button">More Information</button>
      </div>
      <div className="integration-image-column">
        <img
          src={integrationImage}
          alt="Integration Feature"
          className="integration-image"
        />
      </div>
    </section>
  );
}

export default Integeration;
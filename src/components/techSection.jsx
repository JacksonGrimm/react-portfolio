import React from "react";

import WaveTwo from "./wave-2";
import stack from "../icons/icons8-stack.svg"
function TechSection() {
    return (
      <>
      <section className="tech-section">
      <h4>Technologies</h4>
      <div className="tech-container">
        <img id="stack" src={stack} alt="" />
        <div className="tech-list">
          <p className="subheading">I have experience using the...</p>
          <h3>Mern Stack</h3>
          <ul id="stack-ul">
            <li>MongoDB</li>
            <li>Express JS</li>
            <li>React</li>
            <li>NodeJS</li>
          </ul>
          <button id="learn-more">learn More</button>
        </div>
      </div>
      <WaveTwo />
    </section>
      </>
  
    );
  }
  
  export default TechSection;
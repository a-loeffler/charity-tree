import React, { useState } from "react";
import "./index.css";

import whiteCherry from './white-cherry.svg';
import treeVector from './tree-vector.svg';

const About = () => {
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  const [hover4, setHover4] = useState(false)

  return (
    <div className="about-page-container">
      <h1 className="about-page-title">Charity Tree</h1>
      <section className="about-page-section">
        <h2 className="about-page-heading">Mission and Purpose</h2>
        <div className="about-info-container">
          <div className="about-info-image-container">
            <img className='tree-image' src={treeVector} alt='tree'></img>
          </div>
          <div className="about-info-text-container">
            <p className="about-info-text">
            The purpose of Charity Tree is to provide a venue for nonprofit groups and charities to create and maintain
            fundraising projects. Charity Tree is a fullstack React app that allows users to discover nonprofits and
            charities that they can support.
            </p>
          </div>
        </div>
      </section>
      <section className="about-page-section">
        <h2 className="about-page-heading">
          The Creators
        </h2>
        <p className="about-info-text">Hover Over To Learn More</p>
        <div className="about-creators-container">
          <div className="creator-bubble" onMouseEnter={e => setHover1(true)} onMouseLeave={e => setHover1(false)}>
            <h1 className="white-text">Andrew Loeffler</h1>
            <img
              src={whiteCherry}
              alt='cherry logo'
              style={{ height: "50px", width: "50px" }}
            ></img>
            {hover1 &&
            <>
            <a
            className="white-text"
            href={"https://github.com/a-loeffler"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
          className="white-text"
          href={"https://www.linkedin.com/in/andrew-loeffler-fullstack-dev/"}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        </>
          }

          </div>
          <div className="creator-bubble" onMouseEnter={e => setHover2(true)} onMouseLeave={e => setHover2(false)}>
            <h1 className="white-text">Drew Long</h1>
            <img
              src={whiteCherry}
              alt='cherry logo'
              style={{ height: "50px", width: "50px" }}
            ></img>
            {hover2 &&
            <>
            <a
            className="white-text"
            href={"https://github.com/drewlong314"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
          className="white-text"
          href={"https://www.linkedin.com/in/drew-long-361772172/"}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        </>
          }
          </div>
          <div className="creator-bubble" onMouseEnter={e => setHover3(true)} onMouseLeave={e => setHover3(false)}>
            <h1 className="white-text">Mike Sineath</h1>
            <img
              src={whiteCherry}
              alt='cherry logo'
              style={{ height: "50px", width: "50px" }}
            ></img>
            {hover3 &&
            <>
            <a
            className="white-text"
            href={"https://github.com/msineath"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
          className="white-text"
          href={"https://www.linkedin.com/in/mike-sineath-93149a213/"}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        </>
          }
          </div>
          <div className="creator-bubble" onMouseEnter={e => setHover4(true)} onMouseLeave={e => setHover4(false)}>
            <h1 className="white-text">Kevin Betker</h1>
            <img
              src={whiteCherry}
              alt='cherry logo'
              style={{ height: "50px", width: "50px" }}
            ></img>
            {hover4 &&
            <>
            <a
            className="white-text"
            href={"https://github.com/kbetker"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
          className="white-text"
          href={"https://www.linkedin.com/in/kevin-betker-878505128/"}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        </>
          }
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

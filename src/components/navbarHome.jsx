import React from "react";

import { Link } from "react-router-dom";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

function NavbarHome() {

  const aboutScroll = () => {
    const section = document.getElementById("hello!")
    section.scrollIntoView({ behavior: 'smooth' });

  }
  return (
    <>
      <article className="main-text">
        <p className="subheading">Hi! My name is,</p>
        <h1>Jackson Grimm</h1>
        <button id="about-me-button" onClick={aboutScroll}>About Me</button>
      </article>
    </>

  );
}

export default NavbarHome;

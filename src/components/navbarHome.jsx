import React from "react";

import { Link } from "react-router-dom";
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

function NavbarHome() {
  return (
    <>
      <article className="main-text">
        <p className="subheading">Hi! My name is,</p>
        <h1>Jackson Grimm</h1>
        <ScrollLink to="about" smooth={true}><button id="about-me-button">About Me</button></ScrollLink>
      </article>
    </>

  );
}

export default NavbarHome;

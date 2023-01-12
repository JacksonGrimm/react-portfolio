function Navbar() {
  return (
    <><a href="#main" id="mountain-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox="0,0,256,256"
        width="40px"
        height="px"
        fillRule="nonzero"
      >
        <g
          fill="none"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          // style="mix-blend-mode: normal"
        >
          <g transform="scale(5.33333,5.33333)">
            <path
              d="M11,21c-0.288,0 -0.575,0.151 -0.725,0.449l-10.275,20.551h22l-10.275,-20.551c-0.15,-0.298 -0.437,-0.449 -0.725,-0.449zM40.206,30.475l-6.206,11.525h14l-6.206,-11.525c-0.17,-0.316 -0.482,-0.475 -0.794,-0.475c-0.312,0 -0.624,0.159 -0.794,0.475z"
              fillOpacity="0.54118"
              fill="#fea837"
            ></path>
            <path
              d="M43,42h-36l9.732,-20l4.268,-6h8l4.68,6.85z"
              fill="#fea837"
            ></path>
            <path
              d="M33.746,23l-2.746,-2l1,7l-6,-11l-3,7l-2,-6l-4.268,4l4.268,-8.77l3.24,-6.78c0.04,-0.08 0.1,-0.15 0.16,-0.21c0.17,-0.16 0.38,-0.24 0.59,-0.24c0.27,0 0.53,0.13 0.68,0.37c0.03,0.03 0.04,0.06 0.06,0.09z"
              fill="#ffffff"
            ></path>
          </g>
        </g>
      </svg>
    </a><div id="main" className="mainBanner"></div>
    <div id="main" className="mainBanner">
      <nav className="d-flex justify-content-around align-items-center">
        <a href="#projects">
          <p>Projects</p>
        </a>
        <a href="#tech">
          <p>Technologies</p>
        </a>
        <a href="#contact" className="ms-6">
          <p>Contact</p>
        </a>
      </nav>
      <article className="main-text">
        <p className="subheading">Hi! My name is,</p>
        <h1>Jackson Grimm</h1>
        <a href="#about"><button id="about-me-button">About Me</button></a>
      </article>
      <div className="spacer wave-1"></div>
    </div>
    </>

  );
}

export default Navbar;

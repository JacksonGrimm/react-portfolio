import avatar from "../icons/MEMoji.PNG"
function AboutSection() {
    return (
      <>
         <section id="about" className="about-container">
      <h2>Hello!</h2>
      <div className="main-about-content">
        <img src={avatar} alt="" id="pfp" />
        <div className="about-text-button">
          <p className="text-felid subheading">
            My name is Jackson, I am a Full Stack Web Developer based in Denver
            Colorado. Checkout some of my projects and my resume below or, if
            you want to work on a project head to my contact page or click the
            icon in the footer!
          </p>
          <button id="resume-button">Resume</button>
        </div>
      </div>
    </section>
      </>
  
    );
  }
  
  export default AboutSection;
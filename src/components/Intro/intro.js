import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Rupak S. Londhe</span>
          <br />
          Software Developer
          <p className="introPara">
            With 2 years of hands-on experience, I specialize in
            designing and developing <br />
            robust applications across diverse domains. I thrive in agile
            environments, collaborating <br />
            effectively to deliver clean, efficient, and reusable code. Adapting
            quickly to challenges,
            <br /> I stay updated with industry trends to propose creative
            solutions. Ready to embrace
            <br /> new opportunities and contribute to cutting-edge projects.
            <br /> I bring a solid foundation in .NET development and a thirst
            for excellence.
          </p>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn">
              <img src={btnImg} alt="Hire" className="btnImg" />
              Hire Me
            </button>
          </Link>
        </span>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;

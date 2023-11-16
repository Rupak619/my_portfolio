import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";


const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">
        What i do      
      </span>
      <span className="skillDesc">
      As a seasoned Software Developer, I specialize in:
        <div>
          <strong>Languages:</strong> C#, JavaScript (React), Python, C++
        </div>
        <div>
          <strong>Database Technologies:</strong> SQL Server, MySQL
        </div>
        <div>
          <strong>Database Design:</strong> SQL Query Optimization, Stored Procedures, Views
        </div>
        <div>
          <strong>Framework and Libraries:</strong> ASP.Net, Bootstrap, W3 CSS, ASP.Net MVC, jQuery
        </div>
        <div>
          <strong>Web Development:</strong> Front-end (HTML, CSS, JavaScript), Back-end (ASP.NET, C#, SQL) , RESTful API development
        </div>
        <div>
          <strong>Software Development Tools:</strong> Visual Studio, Visual Studio Code
        </div>
        {/* <div>
          <strong>Methodologies:</strong> Agile, Test-Driven Development, Unit Testing
        </div> */}
        </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>This is a demo text.</p>
          </div>
        </div>
        {/* <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is a demo text.</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;

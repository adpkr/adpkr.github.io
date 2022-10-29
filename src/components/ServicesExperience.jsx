import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Front-end Developer",
      desc: "Front-end developers design the visual aspects of websites for users to interact with, including colors, layout, and fonts.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Back-end Developer",
      desc: "Back-end developers create the invisible structure that helps websites function properly.",
      active: false,
    },

  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>Fresher</h3>
            <h2>1200+ Hours Coding</h2>
            <p> Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>9+</h4>
              <p>Daily Hours of Coding</p>
            </div>
            <div className="portfolio">
              <p>HTML5 CSS <br/> JAVA  <br/> MySql <br/> Spring Boot <br/> Spring Hibernate <br />JPA JDBC <br /></p>
              {/* <p>Years Experience</p> */}
            </div>
            <div className="portfolio">
              <h4>3</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <p> Netlify <br/>Git Hub <br/>DSA</p>
              <h4>Key Skills</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;

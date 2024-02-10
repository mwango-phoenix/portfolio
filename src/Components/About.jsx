/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import image from "../images/about-me-backdrop.jpg";

const imageAltText = "abstract background";

const description =
  "I'm computer science student studying at University of Waterloo. I enjoy web development and game development with interests in graphic design.";

const skillsList = [
  "Web design",
  "User interface",
  "Mobile user interfaces",
  "Graphic design",
  "Game development",
];

const details =
  "I am detail-oriented and have a passion for designing innovative and creative solutions.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{details}</p>
      </div>
    </section>
  );
};

export default About;

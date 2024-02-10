import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Let Em Cook",
    description:
      "Digital cookbook web page that stores recipes I want to try. Includes a search feature and a form to add new recipes.",
    url: "https://recipe-site-1514.onrender.com/",
  },
  {
    title: "My Portfolio",
    description: "Created from Microsoft's resume workshop and deployed to GitHub pages.",
    url: "https://github.com/mwango-phoenix/portfolio",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" key={project.title}>
              <div className="box">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                <p className="small">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

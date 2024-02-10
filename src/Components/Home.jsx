/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
// import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import image from "../images/home.jpg";

const imageAltText = "Desktop setup with VS Code";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} style={{ opacity: 0.7 }} />
      <div className="transbox" style={{ position: "absolute", top: "5rem", left: "3rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      {/* <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div> */}
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;

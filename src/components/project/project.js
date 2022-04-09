/* eslint-disable */
import React from "react";
import crowd from "../../images/station-crowd.jpg";
import vax from "../../images/vaccine.jpg";
import olymp from "../../images/olymp.jpg";
import "./project.css";

const Project = () => {
  return (
    <section id="project">
      <div className="p-top">
        <h1>Projects</h1>
      </div>
      <div className="p-bottom">
        <div className="p-left">
          <div class="proj_title">
            Krowd-Kam
            <div class="proj_desc">
              Website which provides real-time crowd updates of public places,
              tourist locations and places people visit frequently.<br></br>
              <a
                href="https://github.com/bridyash13/Krowd-Kam"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github &#9654;
              </a>
            </div>
          </div>
        </div>
        <div className="p-mid">
          <div class="proj_mid_title">
            Sentiment Analysis of COVID-19 Vaccines
            <div class="proj_mid_desc">
              A website where the authorities and general users can view data
              and statistics of what are people’s opinions on various vaccines.
              <br></br>
              <a
                href="https://github.com/bridyash13/Sentiment-Analysis-for-COVID-Vaccines-"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github &#9654;
              </a>
            </div>
          </div>
        </div>
        <div className="p-right">
          <div class="proj_title">
            Olympics Event Management
            <div class="proj_desc">
              Website which provides real-time crowd updates of public places,
              tourist locations and places people visit frequently.<br></br>
              <a
                href="https://github.com/bridyash13/Krowd-Kam"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github &#9654;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

import React from "react";
import "./education.css";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ReactComponent as WorkIcon } from "./work.svg";
import "react-vertical-timeline-component/style.min.css";
import edu_img from '../../images/edu.webp'

const Education = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <section id="education">
      <div className="left">
          <div className="edu_img_div">
            <img src={edu_img} alt=""></img>
          </div>
      </div>
      
      <div className="right">
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";

            return (
              <VerticalTimelineElement
                className="TimelineElement"
                key={element.key}
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <p id="grade">{element.grade}</p>
                <p id="description">{element.description}</p>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;

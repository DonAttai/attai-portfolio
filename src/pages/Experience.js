import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import School from "@mui/icons-material/School";
import Work from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="mx-auto">
      <VerticalTimeline lineColor="#202a44">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2011"
          iconStyle={{ background: "#202a44", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Ahmadu Bello University, Zaria, Nigeria.
          </h3>
          <p>Bachelor of Engineering (Electrical)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - present"
          iconStyle={{ background: "#87ceeb", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Software Developer
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

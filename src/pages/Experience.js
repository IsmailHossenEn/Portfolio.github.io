import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="Vertical-timeline-element--education"
          date="2017-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Shahjalal University Of Science and Technology</h3>
          <p>B.A. Hons in Anthropology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="Vertical-timeline-element--education"
          date="2014-2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Belkuchi Government College</h3>
          <p>Higher Secondary Certificate (HSC)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="Vertical-timeline-element--education"
          date="2009-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3>Shohagpur S.K Pilot Government High School</h3>
          <p>Secondary School Certificate (SSC)</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

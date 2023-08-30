import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Heading from "./Heading";
import { experiences } from "../data/experienceData";

function Experience() {
  return (
    <div
      name="Experience"
      className="w-full min-h-screen md:min-h-min text-white bg-gradient-to-b from-slate-900 to-slate-700 pt-20 md:pt-0 z-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <Heading title="Experience/Education Timeline" />

        <VerticalTimeline lineColor="#3e497a">
          {experiences.map(({ title, subTitle, body, icon, date }, i) => (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--education  "
              date={date}
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={icon}
              contentStyle={{
                background: "#445266",
                color: "#fff",
              }}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                {title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
              <p> {body}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;

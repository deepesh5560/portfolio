import React from "react";

import Heading from "./Heading";
import { skills } from "../data/SkillsData";

function Skills() {
  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-slate-900 to-slate-700 text-white w-full min-h-screen pt-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full h-full">
        <Heading
          title="Skills"
          body="These are the technologies I've worked with"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 w-full text-center px-12 gap-8 sm:px-0 ">
          {skills.map(({ id, image, title, style }) => (
            <div
              key={id}
              className={`rounded-lg shadow-md hover:scale-105 duration-500 py-2 ${style}`}
            >
              <img src={image} alt={image} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import js from "../assets/experience/javascript.png";
import react from "../assets/experience/react.png";
import git from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";
import bootstrap from "../assets/experience/bootstrap.png";

export default function Experience() {
  const exps = [
    { id: 1, name: "Html", src: html, style: "shadow-orange-500" },

    { id: 2, name: "Css", src: css, style: "shadow-blue-500" },
    { id: 3, name: "Javascript", src: js, style: "shadow-yellow-500" },
    { id: 4, name: "React js", src: react, style: "shadow-blue-600" },
    { id: 5, name: "Github", src: git, style: "shadow-gray-400" },
    { id: 6, name: "Tailwind css", src: tailwind, style: "shadow-sky-400" },
    { id: 7, name: "Bootstrap", src: bootstrap, style: "shadow-purple-500" },
  ];
  return (
    <div
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-20"
      name="experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6"> These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {exps.map((exp) => {
            return (
              <div
                key={exp.id}
                className={
                  "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                  " " +
                  exp.style
                }
              >
                <img src={exp.src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{exp.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

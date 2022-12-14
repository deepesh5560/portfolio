import React from "react";
import arryd from "../assets/portfolio/arrayDestruct.jpg";
import iNode from "../assets/portfolio/installNode.jpg";
import reactPar from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import usestate from "../assets/portfolio/usestate.jpg";

const Portfolio = () => {
  const ports = [
    {
      id: 1,
      src: arryd,
    },
    {
      id: 2,
      src: iNode,
    },
    {
      id: 3,
      src: reactPar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: reactWeather,
    },
    {
      id: 6,
      src: usestate,
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      name="portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {ports.map((port) => {
            return (
              <div
                key={port.id}
                className="shadow-md shadow-gray-600 rounded-lg"
              >
                <img
                  src={port.src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

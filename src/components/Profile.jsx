import React from "react";
import ProfileImg from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Animation from "./Animation";

function Profile() {
  return (
    <div name="Home" className="w-full pt-20 md:pt-0 h-screen pb-10 md:pb-0">
      <Animation />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-content h-full px-4 md:flex-row ">
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold ">
            I am a Software Engineer
            <br />
            (Full Stack Developer)
          </h2>
          <p className="text-slate-500 py-4 max-w-md ">
            I have more than 1 years of Experience building and designing
            Softwares. Currently, I love to work on web applications using
            technologies like React, Angular, Tailwind, Css3, Html5, Javascript
            , NodeJS , ExpressJs and MongoDB.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group bg-gradient-to-r w-fit from-cyan-500 to-blue-500 rounded-md items-center will-change-transform px-6 py-3 my-2 flex text-white cursor-pointer z-1"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={24} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={ProfileImg}
            className="w-2/3 md:w-4/5 rounded-2xl mx-auto px-2"
            alt="my profile"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Profile;

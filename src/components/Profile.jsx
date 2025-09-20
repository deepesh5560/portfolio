import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Animation from "./Animation";

function Profile() {
  const [time,setTime]=useState()

  function calculateDateDifference(startDateStr) {
const startDate = new Date(startDateStr);
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();
  let days = today.getDate() - startDate.getDate();

  // Adjust for negatives
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Convert into decimal years
  const totalYears = years + months / 12;

  // Custom rules
  if (totalYears < 3.5) {
    return `${Math.floor(totalYears)}+ years of experience`;
  } else if (totalYears >= 3.5 && totalYears < 3.8) {
    return `${totalYears.toFixed(1)} years of experience`;
  } else {
    return `Almost ${Math.ceil(totalYears)} years of experience`;
  }
}

useEffect(() => {
 setTime(calculateDateDifference("2022-05-02"))
}, [])


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
            I have {time} building and designing
            Softwares. Currently, I love to work on web applications using
            technologies like React, Angular, Javascript, TypeScript
            , NodeJS , ExpressJs, MongoDB, MySQL, AWS and GenAI.
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

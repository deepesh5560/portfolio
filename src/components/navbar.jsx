// import { data } from "autoprefixer";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const links = [
    {
      id: 1,
      linkd: "home",
    },
    {
      id: 2,
      linkd: "about",
    },
    {
      id: 3,
      linkd: "portfolio",
    },
    {
      id: 4,
      linkd: "experience",
    },
    {
      id: 5,
      linkd: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="font-sign text-5xl ml-2">Deepesh</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ linkd, id }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={linkd} smooth duration={500}>
                {" "}
                {linkd}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNavToggle(!navToggle)}
        className="pr-4 cursor-pointer z-10 text-gray-500 md:hidden"
      >
        {navToggle ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navToggle && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ linkd, id }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNavToggle(!navToggle)}
                  to={linkd}
                  smooth
                  duration={500}
                >
                  {" "}
                  {linkd}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

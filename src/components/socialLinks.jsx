import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoDocumentOutline } from "react-icons/io5";

function SocialLinks() {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/deepesh-sharma-a7b2321b7/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/deepesh5560",
    },

    {
      id: 4,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:deepesh912@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          Resume
          <IoDocumentOutline size={30} />
        </>
      ),
      href: "/Deepesh.pdf",

      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socialLinks.map(({ id, child, href, style, download }) => {
          return (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 bg-slate-500 px-4 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" +
                " " +
                style
              }
            >
              <a
                href={href}
                download={download}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center text-white w-full"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;

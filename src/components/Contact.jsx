import React from "react";
import Heading from "./Heading";

function Contact() {
  return (
    <div
      name="Contact"
      className="w-full min-h-screen md:h-screen bg-gradient-to-b from-slate-700 to-slate-900 pt-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full h-full">
        <Heading
          title="Contact"
          body="Submit the form below to get in touch with me"
        />
        <div className="flex justify-center items-center">
          <form
            action="
            https://getform.io/f/b55c0166-c2bc-4ed9-a835-57f717392fbc
          "
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name.."
              className="p-2 border-2 rounded-md bg-transparent text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email.."
              className="p-2 border-2 rounded-md bg-transparent text-white focus:outline-none my-2"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 border-2 rounded-md bg-transparent text-white focus:outline-none"
              placeholder="Type your message.."
            ></textarea>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex items-center justify-center px-6 py-3 my-8 text-white cursor-pointer hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

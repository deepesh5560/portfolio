import React from "react";
import Heading from "./Heading";

function Contact() {
  return (
    <div
      name="Contact"
      className="w-full pb-10  bg-gradient-to-b from-slate-700 to-slate-900 pt-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full h-full">
        <Heading
          title="Contact Details"
        />
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#1c2231]/95 rounded-2xl shadow-xl px-8 py-6 max-w-[666px] w-full">
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#636cff] text-white text-xl">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"><path d="M2.25 6.75a2.25 2.25 0 0 1 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75z" stroke="currentColor" strokeWidth="1.5"/><path d="M21.75 6.75l-9.75 6.5-9.75-6.5" stroke="currentColor" strokeWidth="1.5"/></svg>
      </span>
      <div className="text-white text-lg">
        <span className="font-medium mr-1">Email:</span>
        <a
          href="mailto:dssharm912@gmail.com"
          className="underline font-semibold hover:text-[#a7bcff] transition"
        >
          dssharm912@gmail.com
        </a>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#30a678] text-white text-xl">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24"><path d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7Z" stroke="currentColor" strokeWidth="1.5"/><path d="M6 9H18" stroke="currentColor" strokeWidth="1.5"/><path d="M6 13H12" stroke="currentColor" strokeWidth="1.5"/></svg>
      </span>
      <div className="text-white text-lg">
        <span className="font-medium mr-1">Phone:</span>
        <a
          href="tel:+919646039294"
          className="underline font-semibold hover:text-[#4db696] transition"
        >
          +91 9646039294
        </a>
      </div>
    </div>
  </div>
      </div>
    </div>
  );
}

export default Contact;

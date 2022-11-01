import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 max-auto mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod
          tempore magnam hic tempora debitis quam, fugit perferendis molestias
          sed quos impedit neque et, maxime quaerat eligendi nemo eius. Iure
          incidunt optio veritatis reiciendis sit! Rerum maxime sit architecto
          deleniti, blanditiis excepturi perspiciatis! Tenetur, ipsa blanditiis
          nulla quasi molestias exercitationem.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          possimus, ut, ratione blanditiis, libero voluptate veritatis corporis
          quae officiis cum nobis. Voluptatem dolorum magnam itaque nostrum
          ipsum nihil consequatur perferendis earum nemo quibusdam aliquid
          saepe, ducimus assumenda alias eos iure cum, deleniti reiciendis? Ipsa
          harum facilis eligendi velit, veritatis minima?
        </p>
      </div>
    </div>
  );
};

export default About;

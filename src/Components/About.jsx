import React from "react";
import me from "../assets/me.png";
import glb from "../assets/glblogo.jpg";
import cms from "../assets/cmsLogo.png"
const About = ({ theme }) => {
  const isDark = theme === "dark";
  return (
    <>
      <div
        className={`${
          !isDark ? "bg-darkNav " : "bg-light "
        } container p-6 flex flex-wrap group max-w-7xl mx-auto mb-6 px-4 rounded-lg`}
      >
        <h1
          className={`text-xl font-extrabold ${
            isDark ? "text-darkNav" : "text-light"
          } px-2`}
        >
          About Me
        </h1>
        <div
  className={`${
    !isDark ? "bg-lightBlue text-darkNav" : "bg-darkNav text-lightBlue"
  } rounded-lg mt-2 px-6 pt-2 pb-3 font-medium text-lg flex-wrap flex sm:flex-row flex-col items-center py-8`}
>
  <div className="flex-1">
    Ever since 8th grade, I’ve been that unapologetic computer geek,
    diving into code while others were busy with algebra. Now, with
    Java, React, and Tailwind CSS in my toolkit, I bring ideas to life
    with a blend of tech and creativity. I’ve got a thing for UI/UX
    too—Figma and Adobe XD are basically home turf. Thinking outside the
    box? It’s kind of my thing, whether it’s perfecting pixels or
    solving problems in ways no one saw coming.
    <br />
    And yes, I love football—I'm a die-hard Manchester United fan, which
    just adds to the mix.
  </div>
  <div className="ml-4">
    <img
      src={me}
      className="rounded-full max-h-[200px] max-w-[200px] min-w-24 min-h-24 drop-shadow-2xl shadow-xl"
    />
  </div>
</div>

        <div className="flex flex-col items-start w-full">
          <h1
            className={`text-xl font-extrabold ${
              isDark ? "text-darkNav" : "text-light"
            } px-2`}
          >
            Education
          </h1>
          <div
            className={`${
              !isDark
                ? "bg-lightBlue text-darkNav"
                : "bg-darkNav text-lightBlue"
            } rounded-lg mt-2 px-6 pt-2 pb-3 font-medium text-lg m-auto w-full `}
          >
            <div className="p-8 flex justify-between items-center w-full ring-2 rounded-2xl">
              <img src={glb} className="w-12 h-12 rounded-full" />
              <div className="px-6 mt-1 flex-grow">
                <h1 >
                  GL Bajaj Institute of Technology and Management
                </h1>
                <p className="font-thin text-sm">Undergraduate in Computer Science and Information Technology</p>
              </div>

              <p className="font-light"> 2021-Present </p>
            </div>
            <div className="p-8 mt-2 flex justify-between items-center w-full ring-2 rounded-2xl">
              <img src={cms} className="w-12 h-12 rounded-full" />
              <div className="px-6 m-0 flex-grow">
                <h1 >
                  City Montessori School
                </h1>
                <p className="font-thin text-sm">Intermediate Schooling (Senior Secondary Schooling) </p>
              </div>

              <p className="font-light"> Class of 2021 </p>
            </div>
            <div className="p-8 mt-2 flex justify-between items-center w-full rounded-2xl ring-2">
              <img src={cms} className="w-12 h-12 rounded-full" />
              <div className="px-6 m-0 flex-grow">
                <h1 >
                City Montessori School
                </h1>
                <p className="font-thin text-sm">High Schooling</p>
              </div>

              <p className="font-light"> Class of 2019 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

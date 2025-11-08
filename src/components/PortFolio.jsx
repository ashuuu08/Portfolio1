import React from "react";
import java from "../../public/project/Weater.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/project/TODO.png";
import express from "../../public/project/univercity.png";
import reactjs from "../../public/project/eoon.png";
import nodejs from "../../public/project/SopeEase.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "TODO List",
      dis: "created react Application ",
      link:"https://todomy08.netlify.app/",
      sorce:"https://github.com/ashuuu08/To_do_app",
    },
    {
      id: 2,
      logo: express,
      name: "Univercity WebSite",
      dis:" This is univercity Website ",
       link:"https://ptsns.netlify.app/",
        sorce:"https://github.com/ashuuu08/To_do_app",
    },
    {
      id: 3,
      logo: reactjs,
      name: "Virtual Assistant",
      dis: "Virtual Assistant using HTML CSS and JavaScript",
       link:"",
        sorce:"https://github.com/ashuuu08/Virtual_Assistant",
    },
    {
      id: 4,
      logo: nodejs,
      name: "SopeEase",
      dis:" A E-Commerce FullStack WebSite Using SpringBoot, Mysql,React,Payment Getway",
       link:"https://shop-ease-theta.vercel.app/",
        sorce:"https://github.com/ashuuu08/shopEase-e-Commerce",
    },
   
    {
      id: 5,
      logo: java,
      name: "Weather Application",
      dis:" WEather Application using react And Api",
       link:"https://todomy08.netlify.app/",
        sorce:"https://github.com/ashuuu08/To_do_app",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name,dis,link,sorce }) => (
            <div
              className="md:w-[275px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 dark:md:hover:bg-zinc-300 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                 {dis}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ">
                   <a href={link}>Link</a>
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                 <a href={sorce}>Source Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;

import React, { useContext, useEffect, useRef, useState } from "react";
import { GameData } from "./context/GameData";
// import "../src/App.css";
import "./App.css";

import highSchool from "../src/utils/background/high-school-surrounded-by-green-schoolyard-flat-color-vector-illustration_151150-10217.avif";
import tree from "../src/utils/background/1165702_ORS97Z0.jpg";
import ground from "../src/utils/background/hopscotch-playground-background_1308-92401.avif";
import fruitTree from "../src/utils/background/istockphoto-964799846-612x612.jpg";
import parkPlay from "../src/utils/background/park-playground-school-scene-with-blank-sky_1308-51837.avif";
import road from "./utils/background/1165702_ORS97Z0.jpg";

export const Hero = () => {
  const {
    GifList,
    index,
    setindex,
    audioList,
    setaudioList,
    pronList,
    setpronList,
  } = useContext(GameData);
  let audioRef = useRef();

  return (
    <div className=" overflow-hidden rounded-lg bg-[#8181bc2f]">
      {index === null ? (
        <div className="min-h-[320px] flex  justify-center items-center px-4 py-2    ">
          <p
            className=" move text-[3rem]  w-fit animate-bounce text-purple-600 cursor-pointer bg-[#ffffff73] px-7 py-4  rounded-xl shadow-lg"
            onClick={() => setindex(0)}
          >
            {" "}
            click to start
          </p>
        </div>
      ) : (
        <div>
          <div
            className={` w-full flex justify-center flex-col items-center  bg-cover bg-no-repeat  rounded-lg
       

            ${
              index == 0 &&
              "bg-[url(./utils/background/original-79ae512fddef5f5c6352103e2b02f2b2.jpg)] "
            }
            ${index == 1 && "bg-[url(./utils/background/1165702_ORS97Z0.jpg)] "}
            ${
              index == 2 &&
              "bg-[url(./utils/background/original-79ae512fddef5f5c6352103e2b02f2b2.jpg)] "
            }
            ${
              index == 3 &&
              "bg-[url(../src/utils/background/park-playground-school-scene-with-blank-sky_1308-51837.avif)] "
            }
            ${
              index == 4 &&
              "bg-[url(../src/utils/background/istockphoto-964799846-612x612.jpg)] "
            }
            ${
              index == 5 &&
              "bg-[url(../src/utils/background/high-school-surrounded-by-green-schoolyard-flat-color-vector-illustration_151150-10217.avif)] "
            }
            ${
              index == 6 &&
              "bg-[url(../src/utils/background/park-playground-school-scene-with-blank-sky_1308-51837.avif)] "
            }
            ${
              index == 7 &&
              "bg-[url(../src/utils/background/high-school-surrounded-by-green-schoolyard-flat-color-vector-illustration_151150-10217.avif)] "
            }
          
             
            `}
          >
            <div
              className="text-purple-500  animate-pulse font-bold   duration-1000 text-[35px] px-10 py-2
             border-2 bg-[#ffffffee]  rounded-lg shadow-lg mb-5 
            "
            >
              {GifList[index].name}
            </div>
            <img
              src={GifList[index].gif}
              alt=""
              className={` move  h-[300px] hover:translate-x-[0px] duration-200 overflow-hidden
        
          `}
            />
            <audio
              src={audioList[index]}
              loop
              autoPlay
              preload="auto"
              ref={audioRef}
            ></audio>
            <audio src={pronList[index]} autoPlay preload="auto"></audio>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useContext, useEffect } from "react";
import { GameData } from "./context/GameData";

export const Tiles = () => {
  const { GifList, index, setindex } = useContext(GameData);

  useEffect(() => {
    randomcolor = Math.floor(Math.random() * 16777215).toString(16);
  }, []);

  let randomcolor = () => {
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);
    return `rgb(${num1},${num2},${num3})`;
  };
  let color = randomcolor();
  console.log(color);
  return (
    <div>
      <div className="flex flex-row items-end justify-center bg-[#8181bc2f]  gap-4 w-full rounded-md p-2 sm:px-5 py-7  md:py-10 flex-wrap select-none ">
        {GifList &&
          GifList.map((ele, ind) => (
            <div
              key={ind}
              onClick={() => setindex(ind)}
              className={`  p-3 px-7   md:p-2 md:px-6  xl:p-4 xl:px-10 w-fit
             hover:cursor-pointer  rounded-xl shadow-xl hover:scale-105 duration-900  ${
               ind == index
                 ? " border-2 border-yellow-400 bg-[#5454dd2f]"
                 : " bg-gray-100 border-2"
             }  bg-[${color}]
             `}
            >
              <div
                className={`md:text-[2rem] text-purple-600  ${
                  index === ind && "text-white "
                }`}
              >
                {ele.text}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

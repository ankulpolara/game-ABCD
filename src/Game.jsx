import React, { useContext } from "react";
import { Tiles } from "./Tiles";
import { Hero } from "./Hero";
import { GameData } from "./context/GameData";

export const Game = () => {
  const { GifList, index, setindex } = useContext(GameData);
  console.log(GifList);
  return (
    <div className=" mt-[0.5%]  w-[99%]   lg:w-[47%] p-10 flex flex-col gap-5">
      <Hero />
      <Tiles />
    </div>
  );
};

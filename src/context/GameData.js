import { createContext, useState } from "react";
import ambulance from "../utils/ambulance.gif";
import bear from "../utils/bear.gif";
// import bee from "../utils/bee.gif";
// import apple from "../utils/apple.gif";
// import bicycle from "../utils/bicycle.gif";
import coin from "../utils/coin.gif";
import duck from "../utils/duck.gif";
import eye from "../utils/eye.gif";
import foodTruck from "../utils/food-truck.gif";
// import chips from "../utils/french-fries-chips.gif";
import gift from "../utils/gift.gif";
// import home from "../utils/home.gif";
import horse from "../utils/horse.gif"

import bearAudio from "../utils/audiio/angry-beast-6172.mp3"
import ambulanceAudio from "../utils/audiio/distant-ambulance-siren-6108.mp3"
import coinAudio from "../utils/audiio/single-coin-170397.mp3"
import duckAudio from "../utils/audiio/043356_duck-65038.mp3"
import eyeAudio from "../utils/audiio/cobra-eye-30230.mp3"
import foodAudio from "../utils/audiio/food-mixer-29555.mp3"
import giftAudio from "../utils/audiio/christmas-ident-21090.mp3"
import horseAudio from "../utils/audiio/horse-and-chariot-30-sec-73615.mp3"

import ambulanceP from "../utils/pronounciations/ambulance.mp3"
import bearP from "../utils/pronounciations/bear.mp3"
import coinP from "../utils/pronounciations/coin.mp3"
import duckP from "../utils/pronounciations/duck.mp3"
import eyeP from "../utils/pronounciations/eye.mp3"
import foodtruckP from "../utils/pronounciations/food-truck.mp3"
import giftP from "../utils/pronounciations/gift.mp3"
import horseP from "../utils/pronounciations/horse.mp3"


const GameData = createContext();


const GameDataProvider = ({ children }) => {
    const [GifList, setGifList] = useState([
        { gif: ambulance, text: "A", name: "Ambulance" }, { gif: bear, text: "B", name: "Bear" }, { gif: coin, text: "C", name: "Coin" }, { gif: duck, text: "D", name: "Duck" }, { gif: eye, text: "E", name: "Eyes" }, { gif: foodTruck, text: "F", name: "Food-Truck" }, { gif: gift, text: "G", name: "Gift" }, { gif: horse, text: "H", name: "Horse" }
    ]);

    const [audioList, setaudioList] = useState([ambulanceAudio, bearAudio, coinAudio, duckAudio, eyeAudio, foodAudio, giftAudio, horseAudio
    ]);
    const [pronList, setpronList] = useState([ambulanceP, bearP, coinP ,duckP ,eyeP,foodtruckP,giftP ,horseP ]);


    const [index, setindex] = useState(null)

    return (
        <GameData.Provider value={{ GifList, setGifList, index, setindex, audioList, setaudioList, pronList, setpronList}}>
            {children}
        </GameData.Provider>
    )
}

export { GameData, GameDataProvider }
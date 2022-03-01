import { useState } from "react";
import GameControls from "./components/GameControls";
import Life from "./components/Life";
import RiddleCardsDisplay from "./components/RiddleCardsDisplay";
import SearchInfo from "./components/SearchInfo";
import LandingPage from "./components/LandingPage";
import "./index.css";
import OpeningPage from "./components/OpeningPage";

function App() {
  const [gameState, setGameState] = useState(-1);
  const [riddle, setRiddle] = useState({});

  const beginHandler = () => {
    setGameState(0);
  }

  const continueHandler = (riddle) => {
    setGameState((prev) => {
      return(prev+1);
    });
    setRiddle(riddle);
  }

  const startoverHandler = () => {
    console.log("startover clicked");
    setGameState(0);
  }

  const quitHandler = () => {
    console.log("quit clicked");
    setGameState(-1);
  }

  const level1 = (
    <div className="gameLevel">
      <div className="riddleCardList">
        <RiddleCardsDisplay onContinue={continueHandler} gameState={gameState}/>
      </div>
      <div className="sideBar"> 
        <Life levelNo={gameState}/>
        <SearchInfo riddle={riddle}/>
        <GameControls onStartover={startoverHandler} onQuit={quitHandler}/>
      </div>
    </div>
  );
  
  const level0 = (
    <OpeningPage onContinue={continueHandler} gameState={gameState}/>
  );

  return (
    <>
    {gameState === -1?
      <LandingPage onBegin={beginHandler} gameState={gameState}/>:
      (gameState === 0 ? level0 : level1)
    }
    </>
  );
}

export default App;

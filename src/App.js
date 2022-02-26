import { useState } from "react";
import GameControls from "./components/GameControls";
import Life from "./components/Life";
import RiddleCardsDisplay from "./components/RiddleCardsDisplay";
import SearchInfo from "./components/SearchInfo";
import LandingPage from "./components/LandingPage";
import Card from "./UI/Card";
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
    <div className="level">
      <div className="riddleCardList"> 
        <Card height="92%" margin="2vh 4vh 3vh 2vh" padding="auto">
          <RiddleCardsDisplay onContinue={continueHandler} gameState={gameState}/>
        </Card>
      </div>
      <div className="sideBar"> 
        <Life levelNo={gameState}/>
        <SearchInfo riddle={riddle}/>
        <GameControls onStartover={startoverHandler} onQuit={quitHandler}/>
      </div>
    </div>
  );
  
  const level0 = (
    <div className="openLevel">
        <OpeningPage onContinue={continueHandler} gameState={gameState}/>
    </div>
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

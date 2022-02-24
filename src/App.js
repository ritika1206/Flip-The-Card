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
  const [gameState, setGameState] = useState(0);

  const beginHandler = () => {
    setGameState(1);
  }

  const continueHandler = () => {
    setGameState(2);
  }

  const level1 = (
    <div className="level">
      <div>
        <Card>
          <RiddleCardsDisplay/>
        </Card>
      </div>
      <div className="sideBard"> 
        <Life/>
        <SearchInfo/>
        <GameControls/>
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
    {gameState === 0?
      <LandingPage onBegin={beginHandler} gameState={gameState}/>:
      (gameState === 1 ? level0 : level1)
    }
    </>
  );
}

export default App;

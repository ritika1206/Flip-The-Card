import { useState } from "react";
import GameControls from "./components/GameControls";
import Life from "./components/Life";
import RiddleCardsDisplay from "./components/RiddleCardsDisplay";
import SearchInfo from "./components/SearchInfo";
import LandingPage from "./components/LandingPage";
import Card from "./UI/Card";
import "./index.css";

function App() {
  const [gameState, setGameState] = useState(true);

  const beginHandler = () => {
    setGameState(false);
  }

  return (
    <>
    {gameState?
      <LandingPage onBegin={beginHandler}/>:
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
    }
    </>
  );
}

export default App;

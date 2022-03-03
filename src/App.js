import { useState } from "react";
import GameControls from "./components/GameControls";
import Life from "./components/Life";
import SearchInfo from "./components/SearchInfo";
import LandingPage from "./components/LandingPage";
import "./index.css";
import OpeningPage from "./components/OpeningPage";
import GS from "./components/GS";
import LoseModal from "./components/LoseModal";
import WinModal from "./components/WinModal";

function App() {
  const [gameState, setGameState] = useState(-1);
  const [riddle, setRiddle] = useState({});
  const [seq, setSeq] = useState(0);
  const [invalidFlipped, setInvalidFlipped] = useState(0);
  const [validCard, setValidCard] = useState(-1);

  const invalidFlippedHandler = () => {
    setInvalidFlipped((prev) => {
      return(prev + 1);
    })
  }
  
  const continueHandler = (riddle) => {
    setGameState((prev) => {
      return(prev+1);
    });
    setRiddle(riddle);
    validCardSetter(seq);
  }

  const validCardSetter = (seq) => {
    // console.log("yo");
    // console.log(gameState);
    // console.log("yo");
    // console.log(validCard);
    // console.log(seq);
    if(seq === "1"){
      gameState === 0 && setValidCard(6);
      gameState === 1 && setValidCard(3);
      gameState === 2 && setValidCard(4);
      gameState === 3 && setValidCard(1);
      gameState === 4 && setValidCard(5);
    }
    if(seq === "2"){
      gameState === 0 && setValidCard(8);
      gameState === 1 && setValidCard(5);
      gameState === 2 && setValidCard(6);
      gameState === 3 && setValidCard(4);
      gameState === 4 && setValidCard(6);
    }
    if(seq === "3"){
      gameState === 0 && setValidCard(5);
      gameState === 1 && setValidCard(7);
      gameState === 2 && setValidCard(2);
      gameState === 3 && setValidCard(1);
      gameState === 4 && setValidCard(8);
    }
    if(seq === "4"){
      gameState === 0 && setValidCard(9);
      gameState === 1 && setValidCard(4);
      gameState === 2 && setValidCard(1);
      gameState === 3 && setValidCard(3);
      gameState === 4 && setValidCard(7);
    }
    if(seq === "5"){
      gameState === 0 && setValidCard(3);
      gameState === 1 && setValidCard(2);
      gameState === 2 && setValidCard(6);
      gameState === 3 && setValidCard(9);
      gameState === 4 && setValidCard(1);
    }
    if(seq === "6"){
      gameState === 0 && setValidCard(4);
      gameState === 1 && setValidCard(9);
      gameState === 2 && setValidCard(7);
      gameState === 3 && setValidCard(8);
      gameState === 4 && setValidCard(3);
    }
    if(seq === "7"){
      gameState === 0 && setValidCard(5);
      gameState === 1 && setValidCard(9);
      gameState === 2 && setValidCard(7);
      gameState === 3 && setValidCard(4);
      gameState === 4 && setValidCard(8);
    }
    if(seq === "8"){
      gameState === 0 && setValidCard(1);
      gameState === 1 && setValidCard(2);
      gameState === 2 && setValidCard(5);
      gameState === 3 && setValidCard(9);
      gameState === 4 && setValidCard(4);
    }
    if(seq === "9"){
      gameState === 0 && setValidCard(6);
      gameState === 1 && setValidCard(8);
      gameState === 2 && setValidCard(7);
      gameState === 3 && setValidCard(2);
      gameState === 4 && setValidCard(1);
    }
  }

  // console.log("hello");
  // console.log(seq);
  // console.log(validCard);
  // console.log(gameState);

  const seqGetter = (seq) => {
    setSeq(seq);
  }

  const beginHandler = () => {
    setGameState(0);
  }

  const startoverHandler = () => {
    console.log("startover clicked");
    setGameState(0);
  }

  const quitHandler = () => {
    console.log("quit clicked");
    setGameState(-1);
    setInvalidFlipped(0);
  }

  const level1 = (
    <div className="gameLevel">
      <div className="riddleCardList">
        <GS onContinue={continueHandler} gameState={gameState} validCard={validCard} seq={seq} validCardSetter={validCardSetter} invalidFlipped={invalidFlippedHandler}/>
      </div>
      <div className="sideBar"> 
        <Life levelNo={gameState} invalidFlipped={invalidFlipped}/>
        <SearchInfo riddle={riddle}/>
        <GameControls onStartover={startoverHandler} onQuit={quitHandler}/>
      </div>
    </div>
  );
  
  const level0 = (
    <OpeningPage onContinue={continueHandler} gameState={gameState} seqGetter={seqGetter} validCardSetter={validCardSetter}/>
  );

  return (
    <>
    {gameState === -1?
      <LandingPage onBegin={beginHandler} gameState={gameState} />:
      (gameState === 0 ? level0 : invalidFlipped === 6 ? <LoseModal onNewGame={quitHandler}/> : gameState === 6 ? <WinModal onNewGame={quitHandler}/> : level1)
    }
    </>
  );
}

export default App;

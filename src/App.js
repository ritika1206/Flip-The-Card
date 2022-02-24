import GameControls from "./components/GameControls";
import Life from "./components/Life";
import RiddleCardsDisplay from "./components/RiddleCardsDisplay";
import SearchInfo from "./components/SearchInfo";
import Card from "./UI/Card";
import "./index.css";

function App() {
  return (
    <div className="level">
      <div>
        <Card>
          <RiddleCardsDisplay/>
        </Card>
      </div>
      <div>
        <Life/>
        <SearchInfo/>
        <GameControls/>
      </div>
    </div>
  );
}

export default App;

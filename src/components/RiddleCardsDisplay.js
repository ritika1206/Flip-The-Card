import RiddleCard from "./RiddleCard";
import "./RiddleCardDisplay.css";

const RiddleCardsDisplay = () => {
    return(
        <div className="grid">
            <div className="row">
                <RiddleCard fontSize="2.3vh"/>
                <RiddleCard fontSize="2.3vh"/>
                <RiddleCard fontSize="2.3vh"/>
            </div>
            <div className="row">
                <RiddleCard fontSize="2.3vh"/>
                <RiddleCard fontSize="2.3vh"/>
                <RiddleCard fontSize="2.3vh"/>
            </div>
            <div className="row">
                <RiddleCard fontSize="2.3vh"/>
                <RiddleCard fontSize="2.3vh"/>
                <RiddleCard fontSize="2.3vh"/>
            </div>
        </div>
    );
}

export default RiddleCardsDisplay;
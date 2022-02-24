import RiddleCard from "./RiddleCard";
import "./RiddleCardDisplay.css";

const RiddleCardsDisplay = () => {
    return(
        <div className="row">
            <div className="col">
                <RiddleCard fontSize="2.5vh"/>
                <RiddleCard fontSize="2.5vh"/>
                <RiddleCard fontSize="2.5vh"/>
            </div>
            <div className="col">
                <RiddleCard fontSize="2.5vh"/>
                <RiddleCard fontSize="2.5vh"/>
                <RiddleCard fontSize="2.5vh"/>
            </div>
            <div className="col">
                <RiddleCard fontSize="2.5vh"/>
                <RiddleCard fontSize="2.5vh"/>
                <RiddleCard fontSize="2.5vh"/>
            </div>
        </div>
    );
}

export default RiddleCardsDisplay;
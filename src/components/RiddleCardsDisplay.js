import RiddleCard from "./RiddleCard";
import "./RiddleCardDisplay.css";

const RiddleCardsDisplay = () => {
    return(
        <div className="row">
            <div className="col">
                <RiddleCard/>
                <RiddleCard/>
                <RiddleCard/>
            </div>
            <div className="col">
                <RiddleCard/>
                <RiddleCard/>
                <RiddleCard/>
            </div>
            <div className="col">
                <RiddleCard/>
                <RiddleCard/>
                <RiddleCard/>
            </div>
        </div>
    );
}

export default RiddleCardsDisplay;
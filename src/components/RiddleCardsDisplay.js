import RiddleCard from "./RiddleCard";
import "./RiddleCardDisplay.css";
import riddles from "../static/riddles"

const RiddleCardsDisplay = (props) => {
    return(
        <div className="grid">
            <div className="row">
                <RiddleCard fontSize="2.3vh" riddle={riddles[0]} btnWidth="35%" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="2.3vh" riddle={riddles[1]} btnWidth="35%" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="2.3vh" riddle={riddles[2]} btnWidth="35%" onContinue={props.onContinue} gameState={props.gameState}/>
            </div>
            <div className="row">
                <RiddleCard fontSize="2.3vh" riddle={riddles[3]} btnWidth="35%" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="2.3vh" riddle={riddles[4]} btnWidth="35%" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="2.3vh" riddle={riddles[5]} btnWidth="35%" onContinue={props.onContinue} gameState={props.gameState}/>
            </div>
            <div className="row">
                <RiddleCard fontSize="2.3vh" riddle={riddles[6]} btnWidth="35%" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="2.3vh" riddle={riddles[7]} btnWidth="35%" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="2.3vh" riddle={riddles[8]} btnWidth="35%" onContinue={props.onContinue} gameState={props.gameState}/>
            </div>
        </div>
    );
}

export default RiddleCardsDisplay;
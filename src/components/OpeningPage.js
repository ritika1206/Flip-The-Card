import RiddleCard from "./RiddleCard";
import "./RiddleCardDisplay.css";

const OpeningPage = (props) => {
    return(
        <div className="row">
            <div className="col">
                <RiddleCard fontSize="3.3vh" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="3.3vh" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="3.3vh" onContinue={props.onContinue} gameState={props.gameState}/>
            </div>
            <div className="col">
                <RiddleCard fontSize="3.3vh" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="3.3vh" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="3.3vh" onContinue={props.onContinue} gameState={props.gameState}/>
            </div>
            <div className="col">
                <RiddleCard fontSize="3.3vh" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="3.3vh" onContinue={props.onContinue} gameState={props.gameState}/>
                <RiddleCard fontSize="3.3vh" onContinue={props.onContinue} gameState={props.gameState}/>
            </div>
        </div>
    );
}

export default OpeningPage;
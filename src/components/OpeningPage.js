import RiddleCard from "./RiddleCard";
import Card from "../UI/Card";
import "./RiddleCardDisplay.css";

const OpeningPage = (props) => {
    return(
        <Card width="90%" margin="4vh 3vh 4vh 8vh" height="88%" padding="2vh">
            <div className="grid">
                <div className="row">
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState}/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState}/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState}/>
                </div>
                <div className="row">
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState}/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState}/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState}/>
                </div>
                <div className="row">
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState}/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState}/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState}/>
                </div>
            </div>
        </Card>
    );
}

export default OpeningPage;
import RiddleCard from "./RiddleCard";
import Card from "../UI/Card";
import "./RiddleCardDisplay.css";
import riddles from "../static/riddles"

const OpeningPage = (props) => {
    return(
        <Card width="90%" margin="4vh 3vh 4vh 8vh" height="88%" padding="2vh">
            <div className="grid">
                <div className="row">
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[0]} btnWidth="30%"/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[1]} btnWidth="30%"/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[2]} btnWidth="30%"/>
                </div>
                <div className="row">
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[3]} btnWidth="30%"/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[4]} btnWidth="30%"/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[5]} btnWidth="30%"/>
                </div>
                <div className="row">
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[6]} btnWidth="30%"/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[7]} btnWidth="30%"/>
                    <RiddleCard fontSize="2.6vh" onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[8]} btnWidth="30%"/>
                </div>
            </div>
        </Card>
    );
}

export default OpeningPage;
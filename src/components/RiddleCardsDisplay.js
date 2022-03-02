import { useState } from "react";
import RiddleCard from "./RiddleCard";
import riddles from "../static/openLevelRiddles";
import Card from "../UI/Card";
import classes from "./RiddleCardsDisplay.module.css";

const RiddleCardsDisplay = (props) => {
    const [flipped, setFlipped] = useState(false);
    const onflipHandler = () => {
        if(!flipped)
            setFlipped(true);
        else
            setFlipped(false);
    }


    return( 
            <Card class="level">
                <div className={classes.grid}>
                    <div className={classes.row}>
                        <RiddleCard riddle={riddles[0]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped}/>
                        <RiddleCard riddle={riddles[1]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped}/>
                        <RiddleCard riddle={riddles[2]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped}/>
                    </div>
                    <div className={classes.row}>
                        <RiddleCard riddle={riddles[3]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped}/>
                        <RiddleCard riddle={riddles[4]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped}/>
                        <RiddleCard riddle={riddles[5]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped}/>
                    </div>
                    <div className={classes.row}>
                        <RiddleCard riddle={riddles[6]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped}/>
                        <RiddleCard riddle={riddles[7]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped}/>
                        <RiddleCard riddle={riddles[8]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped}/>
                    </div>
                </div>
            </Card>
    );
}

export default RiddleCardsDisplay;
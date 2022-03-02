import { useState } from "react";
import RiddleCard from "./RiddleCard";
import riddles from "../static/openLevelRiddles";
import Card from "../UI/Card";
import classes from "./RiddleCardsDisplay.module.css";

const GS3 = (props) => {
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
                        <RiddleCard riddle={riddles[0]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===1?true:false}/>
                        <RiddleCard riddle={riddles[1]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===2?true:false}/>
                        <RiddleCard riddle={riddles[2]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===3?true:false}/>
                    </div>
                    <div className={classes.row}>
                        <RiddleCard riddle={riddles[3]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===4?true:false}/>
                        <RiddleCard riddle={riddles[4]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===5?true:false}/>
                        <RiddleCard riddle={riddles[5]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===6?true:false}/>
                    </div>
                    <div className={classes.row}>
                        <RiddleCard riddle={riddles[6]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===7?true:false}/>
                        <RiddleCard riddle={riddles[7]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===8?true:false}/>
                        <RiddleCard riddle={riddles[8]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===9?true:false}/>
                    </div>
                </div>
            </Card>
    );
}

export default GS3;
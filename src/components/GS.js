import { useState } from "react";
import RiddleCard from "./RiddleCard";
import riddles from "../static/openLevelRiddles";
import Card from "../UI/Card";
import classes from "./RiddleCardsDisplay.module.css";
import seq1 from "../static/seq1";
import seq2 from "../static/seq2";
import seq3 from "../static/seq3";
import seq4 from "../static/seq4";
import seq5 from "../static/seq5";
import seq6 from "../static/seq6";
import seq7 from "../static/seq7";
import seq8 from "../static/seq8";
import seq9 from "../static/seq9";

const GS1 = (props) => {
    const [riddless, setRiddles] = useState([]);

    if(props.seq === 1)
        setRiddles(seq1);
    if(props.seq === 2)
        setRiddles(seq2);
    if(props.seq === 3)
        setRiddles(seq3);
    if(props.seq === 4)
        setRiddles(seq4);
    if(props.seq === 5)
        setRiddles(seq5);
    if(props.seq === 6)
        setRiddles(seq6);
    if(props.seq === 7)
        setRiddles(seq7);
    if(props.seq === 8)
        setRiddles(seq8);
    if(props.seq === 9)
        setRiddles(seq9);

    const [flipped, setFlipped] = useState(false);
    const onflipHandler = (seq) => {
        if(!flipped)
            setFlipped(true);
        else
            setFlipped(false);
    }


    return( 
            <Card class="level">
                <div className={classes.grid}>
                    <div className={classes.row}>
                        <RiddleCard riddle={riddles[0]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===1?true:false} seq={props.seq} invalidFlipped={props.invalidFlipped}/>
                        <RiddleCard riddle={riddles[1]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===2?true:false} seq={props.seq} invalidFlipped={props.invalidFlipped}/>
                        <RiddleCard riddle={riddles[2]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===3?true:false} seq={props.seq} invalidFlipped={props.invalidFlipped}/>
                    </div>
                    <div className={classes.row}>
                        <RiddleCard riddle={riddles[3]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===4?true:false} seq={props.seq} invalidFlipped={props.invalidFlipped}/>
                        <RiddleCard riddle={riddles[4]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===5?true:false} seq={props.seq} invalidFlipped={props.invalidFlipped}/>
                        <RiddleCard riddle={riddles[5]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===6?true:false} seq={props.seq} invalidFlipped={props.invalidFlipped}/>
                    </div>
                    <div className={classes.row}>
                        <RiddleCard riddle={riddles[6]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===7?true:false} seq={props.seq} invalidFlipped={props.invalidFlipped}/>
                        <RiddleCard riddle={riddles[7]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===8?true:false} seq={props.seq} invalidFlipped={props.invalidFlipped}/>
                        <RiddleCard riddle={riddles[8]} clsBtn="levelContinue" clsRiddleContent="levelRiddleContent" onContinue={props.onContinue} gameState={props.gameState} onFlip={onflipHandler} flipped={flipped} valid={props.validCard===9?true:false} seq={props.seq} invalidFlipped={props.invalidFlipped}/>
                    </div>
                </div>
            </Card>
    );
}

export default GS1;
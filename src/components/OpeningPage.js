import { useState } from "react";
import RiddleCard from "./RiddleCard";
import Card from "../UI/Card";
import riddles from "../static/openLevelRiddles";
import classes from "./OpeningPage.module.css";
import css from "./RiddleCardsDisplay.module.css";

const OpeningPage = (props) => {
    const [flipped, setFlipped] = useState(false);
    const onflipHandler = (seq) => {
        if(!flipped)
            setFlipped(true);
        else
            setFlipped(false);
        props.seqGetter(seq);
        props.validCardSetter();
    }

    return(
        <div className={classes.openingLevel}>
            <Card class="openLevel">
                <div className={css.grid}>
                    <div className={css.row}>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[0]} clsBtn="openContinue" clsRiddleContent="openRiddleContent" onFlip={onflipHandler} flipped={flipped} seq="1" valid={true}/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[1]} clsBtn="openContinue" clsRiddleContent="openRiddleContent" onFlip={onflipHandler} flipped={flipped} seq="2" valid={true}/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[2]} clsBtn="openContinue" clsRiddleContent="openRiddleContent" onFlip={onflipHandler} flipped={flipped} seq="3" valid={true}/>
                    </div>
                    <div className={css.row}>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[3]} clsBtn="openContinue" clsRiddleContent="openRiddleContent" onFlip={onflipHandler} flipped={flipped} seq="4" valid={true}/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[4]} clsBtn="openContinue" clsRiddleContent="openRiddleContent" onFlip={onflipHandler} flipped={flipped} seq="5" valid={true}/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[5]} clsBtn="openContinue" clsRiddleContent="openRiddleContent" onFlip={onflipHandler} flipped={flipped} seq="6" valid={true}/>
                    </div>
                    <div className={css.row}>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[6]} clsBtn="openContinue" clsRiddleContent="openRiddleContent" onFlip={onflipHandler} flipped={flipped} seq="7" valid={true}/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[7]} clsBtn="openContinue" clsRiddleContent="openRiddleContent" onFlip={onflipHandler} flipped={flipped} seq="8" valid={true}/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[8]} clsBtn="openContinue" clsRiddleContent="openRiddleContent" onFlip={onflipHandler} flipped={flipped} seq="9" valid={true}/>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default OpeningPage;
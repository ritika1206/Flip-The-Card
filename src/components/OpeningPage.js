import RiddleCard from "./RiddleCard";
import Card from "../UI/Card";
import riddles from "../static/riddles";
import classes from "./OpeningPage.module.css";
import css from "./RiddleCardsDisplay.module.css";

const OpeningPage = (props) => {
    return(
        <div className={classes.openingLevel}>
            <Card class="openLevel">
                <div className={css.grid}>
                    <div className={css.row}>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[0]} clsBtn="openContinue" clsRiddleContent="openRiddleContent"/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[1]} clsBtn="openContinue" clsRiddleContent="openRiddleContent"/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[2]} clsBtn="openContinue" clsRiddleContent="openRiddleContent"/>
                    </div>
                    <div className={css.row}>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[3]} clsBtn="openContinue" clsRiddleContent="openRiddleContent"/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[4]} clsBtn="openContinue" clsRiddleContent="openRiddleContent"/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[5]} clsBtn="openContinue" clsRiddleContent="openRiddleContent"/>
                    </div>
                    <div className={css.row}>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[6]} clsBtn="openContinue" clsRiddleContent="openRiddleContent"/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[7]} clsBtn="openContinue" clsRiddleContent="openRiddleContent"/>
                        <RiddleCard onContinue={props.onContinue} gameState={props.gameState} riddle={riddles[8]} clsBtn="openContinue" clsRiddleContent="openRiddleContent"/>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default OpeningPage;
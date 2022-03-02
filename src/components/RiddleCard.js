import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Riddle from "./Riddle";
import classes from "./RiddleCard.module.css";

const RiddleCard = (props) => {
    const [flipStyle, setFlipStyle] = useState();
    
    const clickHandler = () => {
        if(!props.flipped){
            if(!flipStyle){
                setFlipStyle({
                    transform: "rotateY( 180deg ) scale(1.2, 1.2)",
                    zIndex: "1"
                })
            }
            props.onFlip();
        }
    }

    const onCardContinueHandler = () => {
        setFlipStyle();
        props.onFlip();
    }

    return(
        <div className={classes.riddleCard} onClick={clickHandler} style={flipStyle}>
                <div className={classes.front}>
                    <Card class="riddleCardFront" />
                </div>
                <div className={classes.back}>
                    <Card class="riddleCardBack">
                        <Riddle class={props.clsRiddleContent} riddle={props.riddle} />
                        <Button 
                        class={["continue", props.clsBtn].join(" ")}
                        onContinue={props.onContinue}
                        onCardContinue={onCardContinueHandler}
                        riddle={props.riddle}
                        >
                            Continue
                        </Button>
                    </Card>
                </div>    
        </div>
    );
}

export default RiddleCard;
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Riddle from "./Riddle";
import classes from "./RiddleCard.module.css";

const RiddleCard = (props) => {
    const [flipStyle, setFlipStyle] = useState();
    
    const clickHandler = () => {
        if(!props.valid){
            !props.validFlippedno && props.invalidFlipped();
            if(!props.flipped){
                if(!flipStyle || flipStyle.transform === "rotateY( 0deg )"){
                    setFlipStyle({
                        transform: "rotateY( 360deg )",
                        transition: "transform 2.4s"
                    })
                }
                else {
                    setFlipStyle({
                        transform: "rotateY( 0deg )",
                        transition: "transform 2.4s"
                    });
                }
            }
        }
        else if(!props.flipped){
            console.log(props.flipped); 
            if(!flipStyle || flipStyle.transform === "rotateY( 0deg )" || flipStyle.transform === "rotateY( 360deg )"){
                setFlipStyle({
                    transform: "rotateY( 180deg ) scale(1.2, 1.2)",
                    zIndex: "1"
                })
            }
            props.onFlip(props.seq?props.seq:null);
            props.validFlipped();
        }
    }

    const onCardContinueHandler = () => {
        setFlipStyle();
        props.onFlip(props.seq?props.seq:null);
        props.validFlipped(props.validFlippedno);
    }

    let riddleCardContent = () => {
        return(
            <div className={classes.extraDiv}>
                <Riddle class={props.clsRiddleContent} riddle={props.riddle} />
                <Button 
                    class={["continue", props.clsBtn].join(" ")}
                    onContinue={props.onContinue}
                    onCardContinue={onCardContinueHandler}
                    riddle={props.riddle}
                >
                    Continue
                </Button>
            </div>
        );
    };

    return(
        <div className={classes.riddleCard} onClick={clickHandler} style={flipStyle}>
                <div className={classes.front}>
                    <Card class="riddleCardFront" />
                </div>
                <div className={classes.back}>
                    <Card class={props.valid? "riddleCardBack" : ["riddleCardBack", "extended"].join(" ")}>
                        {props.valid && riddleCardContent()}  
                    </Card>
                </div>    
        </div>
    );
}

export default RiddleCard;
import Card from "../UI/Card";
import thumbsUp from "../static/thumbsUp.png";
import classes from "./LoseModal.module.css";
import Button from "../UI/Button";

const LoseModal = (props) => {
    return(
        <div className={classes.loseModal}>
            <Card class="openLevel">
                <div className={classes.title}>
                    <h1 className={classes.heading}>Better Luck next time</h1>
                    <img src={thumbsUp} className={classes.thumbsUpImg} />
                </div>
                <div>
                    <Button class="newGame" onNewGame={props.onNewGame}>New Game</Button>
                </div>
            </Card>
        </div>
    );
}

export default LoseModal;
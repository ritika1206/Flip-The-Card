import Card from "../UI/Card";
import celeb from "../static/celeb.png";
import classes from "./WinModal.module.css";
import Button from "../UI/Button";

const WinModal = (props) => {
    return(
        <div className={classes.winModal}>
            <Card class="openLevel">
                <div className={classes.title}>
                    <img src={celeb} className={classes.celebImg} />
                    <h1 className={classes.heading}>Winner</h1>
                    <img src={celeb} className={classes.celebImg} />
                </div>
                <div>
                    <Button class="newGame" onNewGame={props.onNewGame}>New Game</Button>
                </div>
            </Card>
        </div>
    );
}

export default WinModal;
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./GameControls.module.css";

const GameControls = (props) => {
    return(
        <Card class="gameControls">
            <div className={classes.control}>
                <Button class="startover"
                        onStartover={props.onStartover}>Start Over</Button>
                <Button class="quit"
                        onQuit={props.onQuit}>Quit</Button>
            </div>
        </Card>
    );
}

export default GameControls;
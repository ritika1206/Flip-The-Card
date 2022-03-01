import Button from "../UI/Button";
import classes from "./LandingPage.module.css";

const LandingPage = (props) => {
    return(
    <div className={classes.landing}>
        <h1 className={classes.title}>Flip the Card</h1>
        <Button class="begin" onBegin={props.onBegin} gameState={props.gameState}>Begin</Button>
    </div>
    );
}

export default LandingPage;
import Card from "../UI/Card";
import LifeHeart from "./LifeHeart";
import classes from "./SearchInfo.module.css";

const Life = (props) => {
    return(
        <Card class="life">
            <h2 className={classes.title}>Level: {props.levelNo}</h2>
            <hr className={classes.ruler}/>
            <LifeHeart />
        </Card>
    );
}

export default Life;
import Card from "../UI/Card";
import LifeHeart from "./LifeHeart";
import classes from "./SearchInfo.module.css";
import css from "./Life.module.css";

const Life = (props) => {
    return(
        <Card class="life">
            <h2 className={classes.title}>Level: {props.levelNo}</h2>
            <hr className={css.ruler}/>
            <LifeHeart />
        </Card>
    );
}

export default Life;
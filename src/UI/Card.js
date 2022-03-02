import classes from "./Card.module.css";

const Card = (props) => {
    const cardClass = () => {
        if(props.class === "openLevel")
            return([classes.card, classes.openLevel].join(" "));
        if(props.class === "level")
            return([classes.card, classes.level].join(" "));
        if(props.class === "life")
            return([classes.card, classes.life].join(" "));
        if(props.class === "searchInfo")
            return([classes.card, classes.searchInfo].join(" "));
        if(props.class === "gameControls")
            return([classes.card, classes.gameControls].join(" "));
        if(props.class === "riddleCardFront")
            return([classes.card, classes.riddleCardFront].join(" "));
        if(props.class === "riddleCardBack")
            return([classes.card, classes.riddleCardBack].join(" "));
        if(props.class === "riddleCardBack extended")
            return([classes.card, classes.riddleCardBack, classes.extended].join(" "));
    }

    return(
        <div className={cardClass()}>
            {props.children}
        </div>
    );
}
export default Card;
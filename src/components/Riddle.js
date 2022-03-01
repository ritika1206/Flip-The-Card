import classes from "./Riddle.module.css";

const Riddle = (props) => {
    const riddleClass = () => {
        if(props.class === "openRiddleContent")
            return(classes.openRiddleContent);
        if(props.class === "levelRiddleContent")
            return(classes.levelRiddleContent);
        if(props.class === "searchRiddleContent")
            return(classes.searchRiddleContent);
    }

    return(
        <div className={classes.riddle}>
            <p className={riddleClass()}>{props.riddle.rowRiddle}</p>
            <p className={riddleClass()}>{props.riddle.colRiddle}</p>
        </div>
    );
}

export default Riddle;
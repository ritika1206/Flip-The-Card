import classes from"./Button.module.css";

const Button = (props) => {
    let onPress = () => {
            if(props.onStartover)
                props.onStartover();
            if(props.onQuit)
                props.onQuit();
            if(props.onBegin)
                props.onBegin();
            if(props.onContinue)
                props.onContinue(props.riddle)
            if(props.onCardContinue)
                props.onCardContinue();
            if(props.onNewGame)
                props.onNewGame();
    }

    const btnClass = () => {
        if(props.class === "begin")
            return([classes.btn, classes.begin].join(" "));
        if(props.class === "continue openContinue")
            return([classes.btn, classes.continue, classes.openContinue].join(" "));
        if(props.class === "continue levelContinue")
            return([classes.btn, classes.continue, classes.levelContinue].join(" "));
        if(props.class === "startover")
            return([classes.btn, classes.startover].join(" "));
        if(props.class === "quit")
            return([classes.btn, classes.quit].join(" "));
        if(props.class === "newGame")
            return([classes.btn, classes.newGame].join(" "));
    }

    return(
        <div className="btnDiv">
            <button className={btnClass()} type="submit" onClick={onPress} >
            {props.children}
            </button>
        </div>
    );
}

export default Button;
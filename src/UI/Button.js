import "./Button.css";

const Button = (props) => {
    const btnStyle = {
        color: props.textColor,
        fontSize: props.fontSize,
        width: props.width,
        borderColor: props.borderColor,
        background: props.background,
        marginTop: props.marginTop
    };

    let onPress = () => {
            if(props.onStartover)
                props.onStartover();
            if(props.onQuit)
                props.onQuit();
            if(props.onBegin)
                props.onBegin();
            if(props.onContinue)
                props.onContinue(props.riddle)
    }

    return(
        <div className="btnDiv">
            <button style={btnStyle} className="btn" type="submit" onClick={onPress} >
            {props.children}
            </button>
        </div>
    );
}

export default Button;
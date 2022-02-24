import "./Button.css";

const Button = (props) => {
    const btnStyle = {
        color: props.textColor,
        fontSize: props.fontSize,
        width: props.width,
        borderColor: props.borderColor,
        background: props.background
    };

    let onPress = props.gameState === 0 ? props.onBegin : props.onContinue;

    return(
        <div className="btnDiv">
            <button style={btnStyle} className="btn" type="submit" onClick={onPress} >
            {props.children}
            </button>
        </div>
    );
}

export default Button;
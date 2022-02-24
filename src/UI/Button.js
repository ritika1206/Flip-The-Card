import "./Button.css";

const Button = (props) => {
    const btnStyle = {
        color: props.textColor,
        fontSize: props.fontSize,
        width: props.width,
        borderColor: props.borderColor,
        marginLeft: props.marginLeft,
        background: props.background
    };

    return(
        <button style={btnStyle} className="btn" type="submit" onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;
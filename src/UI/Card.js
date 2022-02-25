import "./Card.css";

const Card = (props) => {
    return(
        <div className="card" style={{background: props.background, width: props.width, margin: props.margin, height: props.height, padding: props.padding}}>
            {props.children}
        </div>
    );
}
export default Card;
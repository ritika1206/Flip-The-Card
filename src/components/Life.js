import Card from "../UI/Card";
import LifeHeart from "./LifeHeart";
import "./Life.css";

const Life = (props) => {
    return(
        <Card height="15%">
            <h2>Level: {props.levelNo}</h2>
            <hr className="Lifehr"/>
            <LifeHeart />
        </Card>
    );
}

export default Life;
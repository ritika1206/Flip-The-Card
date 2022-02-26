import "./Backdrop.css";
import RiddleCard from "./RiddleCard";

const Backdrop = (props) => {
    return(
        <div>
            <div className="backdrop"></div>
            <RiddleCard fontSize="5vh" riddle={{
        rowRiddle: "If two's company, and three's a crowd, what are four and five? :9",
        colRiddle: "If there are three apples and you take away two, how many apples do you have?"
            }}/>
        </div>
    );
}

export default Backdrop;
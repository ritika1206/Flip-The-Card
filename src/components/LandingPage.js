import Button from "../UI/Button";
import "./LandingPage.css";

const LandingPage = (props) => {
    return(
    <div className="landing">
        <h1 className="title">Flip the Card</h1>
        <Button textColor="#3f0b52" fontSize="5vh" width="15%" onBegin={props.onBegin} gameState={props.gameState} borderColor="#3f0b52">Begin</Button>
    </div>
    );
}

export default LandingPage;
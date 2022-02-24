import Button from "../UI/Button";
import "./LandingPage.css";

const LandingPage = () => {
    return(
    <div className="landing">
        <h1 className="title">Flip the Card</h1>
        <Button textColor="#8f0a00" fontSize="5vh" width="15%">Begin</Button>
    </div>
    );
}

export default LandingPage;
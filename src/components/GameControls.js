import Button from "../UI/Button";
import Card from "../UI/Card";
import "./GameControls.css";

const GameControls = (props) => {
    return(
        <Card height="4%">
            <div className="control">
                <Button textColor="white"
                        background="#652275"
                        borderColor="#79638a"
                        width="125%"
                        fontSize="3vh"
                        onStartover={props.onStartover}>Start Over</Button>
                <Button textColor="white"
                        background="#ff0303"
                        borderColor="#ff0303"
                        width="120%" 
                        fontSize="3vh"
                        onQuit={props.onQuit}>Quit</Button>
            </div>
        </Card>
    );
}

export default GameControls;
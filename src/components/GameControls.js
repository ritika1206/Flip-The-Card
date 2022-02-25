import Button from "../UI/Button";
import Card from "../UI/Card";
import "./GameControls.css";

const GameControls = () => {
    return(
        <Card height="4%">
            <div className="control">
                <Button textColor="white"
                        background="#79638a"
                        borderColor="#79638a"
                        width="125%"
                        fontSize="3vh">Start Over</Button>
                <Button textColor="white"
                        background="#ff0303"
                        borderColor="#ff0303"
                        width="120%" 
                        fontSize="3vh">Quit</Button>
            </div>
        </Card>
    );
}

export default GameControls;
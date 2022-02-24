import Button from "../UI/Button";
import Card from "../UI/Card";
import "./GameControls.css";

const GameControls = () => {
    return(
        <Card>
            <div className="control">
                <Button textColor="white"
                        background="#79638a"
                        borderColor="#79638a"
                        width="40%"
                        fontSize="3vh">Start Over</Button>
                <Button textColor="white"
                        background="red"
                        borderColor="red"
                        width="30%" 
                        fontSize="3vh">Quit</Button>
            </div>
        </Card>
    );
}

export default GameControls;
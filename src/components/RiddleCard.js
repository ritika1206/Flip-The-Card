import Card from "../UI/Card";
import Button from "../UI/Button";
import "./RiddleCard.css";

const RiddleCard = (props) => {
    return(
        <div className="riddleCard" > 
            <Card>
            <p style={{fontSize: props.fontSize}}>Row: What becomes smaller when you turn it upside down?</p>
            <p style={{fontSize: props.fontSize}}>Coloumn: If there are three apples and you take away two, how many apples do you have?</p>
            <Button textColor="green" fontSize="2.5vh" width="30%" borderColor="green" onContinue={props.onContinue} gameState={props.gameState}>
                Continue
            </Button>
            </Card>
        </div>
    );
}

export default RiddleCard;
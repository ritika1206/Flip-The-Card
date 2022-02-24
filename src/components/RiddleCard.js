import Card from "../UI/Card";
import Button from "../UI/Button";
import "./RiddleCard.css";

const RiddleCard = (props) => {
    return(
        <div className="riddleCard"> 
            <Card>
            <p>Row: What becomes smaller when you turn it upside down?</p>
            <p>Coloumn: If there are three apples and you take away two, how many apples do you have?</p>
            <Button textColor="green" fontSize="2.5vh" width="30%" borderColor="green" marginLeft="14vh">
                Continue
            </Button>
            </Card>
        </div>
    );
}

export default RiddleCard;
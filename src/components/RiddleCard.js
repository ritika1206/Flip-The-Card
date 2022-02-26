import Card from "../UI/Card";
import Button from "../UI/Button";
import "./RiddleCard.css";

const RiddleCard = (props) => {

    return(
        <div className="riddleCard" >
            {/* <div className="inner"> */}
                <div className="front">
                    <Card background="linear-gradient(#e66465, #66123f)">
                        {/* <p style={{fontSize: props.fontSize, color: "#8f0a00"}}>Row: What becomes smaller when you turn it upside down?</p>
                        <p style={{fontSize: props.fontSize, color: "#8f0a00"}}>Coloumn: If there are three apples and you take away two, how many apples do you have?</p>
                        <Button textColor="#8f0a00" fontSize="2.5vh" width="30%" background="#8f0a00" borderColor="#8f0a00" onContinue={props.onContinue} gameState={props.gameState}>
                            Continue
                        </Button> */}
                    </Card>
                </div>
                <div className="back">
                    <Card>
                        <p style={{fontSize: props.fontSize}}>{props.riddle.rowRiddle}</p>
                        <p style={{fontSize: props.fontSize}}>{props.riddle.colRiddle}</p>
                        <Button textColor="green" fontSize="2.5vh" width={props.btnWidth} borderColor="green" onContinue={props.onContinue} gameState={props.gameState} riddle={props.riddle}>
                            Continue
                        </Button>
                    </Card>
                </div>    
            {/* </div>  */}
        </div>
    );
}

export default RiddleCard;


{/* <Card>
            <p style={{fontSize: props.fontSize}}>Row: What becomes smaller when you turn it upside down?</p>
            <p style={{fontSize: props.fontSize}}>Coloumn: If there are three apples and you take away two, how many apples do you have?</p>
            <Button textColor="green" fontSize="2.5vh" width="30%" borderColor="green" onContinue={props.onContinue} gameState={props.gameState}>
                Continue
            </Button>
            </Card> */}
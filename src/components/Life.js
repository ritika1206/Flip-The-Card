import Card from "../UI/Card";

const Life = (props) => {
    return(
        <Card height="15%">
            <h2>Level: {props.levelNo}</h2>
            <hr/>
        </Card>
    );
}

export default Life;
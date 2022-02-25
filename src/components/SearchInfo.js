import Card from "../UI/Card";
import "./SearchInfo.css";

const SearchInfo = (props) => {
    return(
        <Card height="36%">
            <h2>Search</h2>
            <hr/>
            <p className="rowAndCol">Row: What becomes smaller when you turn it upside down?</p>
            <p className="rowAndCol">Coloumn: If there are three apples and you take away two, how many apples do you have?</p>
        </Card>
    );
}

export default SearchInfo;
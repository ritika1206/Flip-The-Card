import Card from "../UI/Card";
import "./SearchInfo.css";

const SearchInfo = (props) => {
    return(
        <Card height="36%">
            <h2>Search</h2>
            <hr/>
            <p className="rowAndCol">{props.riddle.rowRiddle}</p>
            <p className="rowAndCol">{props.riddle.colRiddle}</p>
        </Card>
    );
}

export default SearchInfo;
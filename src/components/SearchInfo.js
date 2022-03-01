import Card from "../UI/Card";
import Riddle from "./Riddle";
import classes from "./SearchInfo.module.css";

const SearchInfo = (props) => {
    return(
        <Card class="searchInfo">
            <h2 className={classes.title}>Search</h2>
            <hr className={classes.ruler}/>
            <Riddle class="searchRiddleContent" riddle={props.riddle} />
        </Card>
    );
}

export default SearchInfo;
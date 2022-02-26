import heart from "../static/heart.jpg";
import "./LifeHeart.css";

const LifeHeart = () => {
    return(
        <div className="lifeHeart">
            <img src={heart} className="heartImg"/>
            <img src={heart} className="heartImg"/>
            <img src={heart} className="heartImg"/>
            <img src={heart} className="heartImg"/>
            <img src={heart} className="heartImg"/>
            <img src={heart} className="heartImg"/>
        </div>
    )
}

export default LifeHeart;
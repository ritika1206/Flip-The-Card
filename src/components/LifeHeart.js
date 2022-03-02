import heart from "../static/heart.jpg";
import "./LifeHeart.css";

const LifeHeart = (props) => {
    let life = 6 - props.invalidFlipped;
    return(
        <div className="lifeHeart">
            {life >= 1 && <img src={heart} className="heartImg"/>}
            {life >= 2 && <img src={heart} className="heartImg"/>}
            {life >= 3 && <img src={heart} className="heartImg"/>}
            {life >= 4 && <img src={heart} className="heartImg"/>}
            {life >= 5 && <img src={heart} className="heartImg"/>}
            {life === 6 && <img src={heart} className="heartImg"/>}
        </div>
    )
}

export default LifeHeart;
import "./PPF.css";
import ppf from "./bee.jpg"
import background from "./backGround.jpg"
function Paragraph() {
    return (
        <div className="ppf-div">
            <img src={background} className="background-jpg" />
            <img src={ppf} className="pff-jpg" />
            <p className="user-name">Bumble Bee</p>
        </div>
    );
}


export default Paragraph;
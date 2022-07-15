import "./Header.css";
import img from "./HeaderName.png";
function Header() {
	return (
		<>
			<div className="topnav">
				<div className="HeaderDiv">
					<p className="HeaderTxt">What The Site</p>
				</div>
				<a className="active" href="#home">
					Home
				</a>
				<a href="#news">News</a>
				<a href="#contact">Contact</a>
				<a href="#about">About</a>
			</div>

			<img src={img} alt="Girl in a jacket" className="Img"></img>
		</>
	);
}

export default Header;

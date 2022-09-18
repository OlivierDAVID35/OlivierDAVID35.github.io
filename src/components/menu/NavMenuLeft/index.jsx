import { Link } from "react-router-dom";
import "./style.scss";

const NavMenuLeft = () => {
	return (
		<nav className="navMenuLeft">
			<ul>
				<li>
					<Link to="/" data-text="Accueil">
						<ion-icon name="home-outline"></ion-icon>
					</Link>
				</li>
				{/* <li>
					<Link to="/signup" data-text="Inscription">
						<ion-icon name="people-outline"></ion-icon>
					</Link>
				</li> */}
				<li>
					<Link to="/login" data-text="Connection">
						<ion-icon name="power-sharp"></ion-icon>
					</Link>
				</li>
				{/* <li>
					<Link to="/logout" data-text="D&#xE9;connection">
						<ion-icon name="power-sharp"></ion-icon>
					</Link>
				</li> */}
				<li>
					<Link to="/contact" data-text="Contact">
						<ion-icon name="mail-outline"></ion-icon>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavMenuLeft;

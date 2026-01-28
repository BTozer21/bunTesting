import { NavLink } from "react-router";
import "../index.css";

export function NavBar() {
	return (
		<nav className="nav">
			<NavLink to="/" className="nav-link">Locations</NavLink> | {""}
			<NavLink to="/dates" className="nav-link">Dates</NavLink> | {""}
		</nav>
	)
}

export default NavBar();

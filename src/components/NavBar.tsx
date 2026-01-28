import { NavLink } from "react-router";
import "../index.css";

export function NavBar() {
	return (
		<nav className="nav">
			<NavLink to="/" className="nav-link">Locations</NavLink> | {""}
		</nav>
	)
}

export default NavBar();

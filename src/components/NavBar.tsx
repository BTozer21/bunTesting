import { NavLink } from "react-router";
import "../index.css";

export function NavBar() {
	return (
		<nav className="nav">
			<NavLink to="/" className="nav-link">Home</NavLink> | {""}
			<NavLink to="/about" className="nav-link">About</NavLink> | {""}
			<NavLink to="/personal" className="nav-link">Personal</NavLink> | {""}
		</nav>
	)
}

export default NavBar();

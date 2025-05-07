import { Outlet, Link } from "react-router";
import logo from "../assets/images/ErWasEens_Logo.png";

function Navbar() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">
							<img className="image-navbar" src={logo} alt="Logo" />
						</Link>
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/MakingOf">MakingOf</Link>
					</li>
					<li>
						<Link to="/Projects">Projects</Link>
					</li>
					<li>
						<Link to="/Parallax" target="_blank" rel="noopener noreferrer">
							Parallax
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}
export default Navbar;

import { Outlet, Link } from "react-router";

function Navbar() {
	return (
		<>
			<nav>
				<ul>
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

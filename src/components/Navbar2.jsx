import { Outlet, Link } from "react-router";

function Navbar2() {
	return (
		<>
			<div className="navbar2">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/MakingOf">MakingOf</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Outlet />
		</>
	);
}
export default Navbar2;

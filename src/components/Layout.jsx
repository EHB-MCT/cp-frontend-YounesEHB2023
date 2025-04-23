import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Footer />
		</>
	);
};

export default Layout;

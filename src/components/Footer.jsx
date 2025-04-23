import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-logo">
				<img className="image" src="../src/images/ErWasEens_Logo.png" alt="Logo" />
			</div>
			<div className="footer-about">
				<h1>About Us</h1>
				<p>
					Welcome to a world where fairy tales scroll with depth. Through
					parallax magic, we bring front-end stories to life — one layer at a
					time. ✨
				</p>
			</div>
			<div className="footer-nav">
				<h1>Links</h1>
				<p>
					<Link to="/">HOME</Link> <br />
					<Link to="/Projects">PROJECTS</Link> <br />
					<Link to="/MakingOf">MAKING-OF</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;

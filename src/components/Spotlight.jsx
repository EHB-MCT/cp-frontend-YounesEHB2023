import React from "react";
import logo from "../assets/images/ErWasEens_Logo.png";
import info from "../assets/images/info_icon.png";
const Spotlight = ({ imageSrc, title, description, icon }) => {
	return (
		<div className="spotlight-wrapper">
			{[1, 2, 3].map((_, index) => (
				<div key={index} className="spotlight-container">
					<div className="spotlight-image">
						<img className="image" src={logo} alt="Logo" />
					</div>
					<div className="spotlight-content">
						<h2>{"Aladdin"}</h2>
						<p>{"Younes Ben Ali"}</p>
						<div className="spotlight-icon">
							<img className="info-image" src={info} alt="Logo" />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Spotlight;

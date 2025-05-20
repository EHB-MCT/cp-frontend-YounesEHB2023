import React from "react";
import info from "../assets/images/info_icon.png";
const Spotlight = ({ imageSrc, title, description, icon }) => {
	return (
		<div className="spotlight-wrapper">
			{[1, 2, 3].map((_, index) => (
				<div key={index} className="spotlight-container">
					<div className="spotlight-image">
						<img
							className="image"
							src="https://res.cloudinary.com/dqc8nbwtd/image/upload/v1747761423/Thumbnail_l0eyuc.png"
							alt="Logo"
						/>
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

import React, { useEffect, useState } from "react";
import info from "../assets/images/info_icon.png";

const DATA_URL =
	"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json";

const Spotlight = () => {
	const [fairytales, setFairytales] = useState([]);

	useEffect(() => {
		fetch(DATA_URL)
			.then((res) => res.json())
			.then((data) => setFairytales(data))
			.catch(() => setFairytales([]));
	}, []);

	return (
		<div className="spotlight-projects">
			{fairytales.map((item, index) => (
				<div key={item.id || index} className="spotlight-container">
					<div className="spotlight-image">
						<img
							className="image"
							src={item.imgThumbnail || ""}
							alt={item.fairytale || "thumbnail"}
						/>
					</div>
					<div className="spotlight-content">
						<h2>{item.fairytale}</h2>
						<p>{item.nameStudent}</p>
						<div className="spotlight-icon">
							<a
								href={item.fairytaleLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img className="info-image" src={info} alt="info" />
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Spotlight;

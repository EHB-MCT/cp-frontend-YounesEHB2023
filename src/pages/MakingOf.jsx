import React from "react";
import SearchFilter from "../components/SearchFilter.jsx";
import Underline from "../components/Underline.jsx"; // Adjust the path based on your file structure

function MakingOf() {
	return (
		<div>
			<SearchFilter />
			<Underline />
			<div className="home-text">
				<h1>Making of - Aladdin en de wonderlamp</h1>
				<img src="./src/images/banner_Aladdin.jpg" alt="Making of Aladdin" />
			</div>
			<div className="content-section">
				<div className="video-section">
					<h2>Explainer Video</h2>
					<video controls>
						<source src="./src/videos/explainer_video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="description-section">
					<h2>Description</h2>
					<p>
						Scroll through the enchanted forest where Snow White's story unfolds
						in layers of depth and wonder. Watch the poison apple float gently
						towards you, while woodland creatures slide in from the sides. As
						you move through the page, the Evil Queen's mirror whispers secrets,
						and dwarves pop up from behind trees with helpful tips about the
						world of front-end magic. With parallax scrolls and animated charm,
						this tale isn’t just told — it’s experienced.
					</p>
				</div>
			</div>
		</div>
	);
}
export default MakingOf;

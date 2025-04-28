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
						<source
							src="https://youtu.be/xvFZjo5PgG0?si=uFtKUanPZtTET14y"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="description-section">
					<h2>Description</h2>
					<p>
						Step into the bustling streets of Agrabah where Aladdin’s adventure
						shimmers to life in layers of magic and mystery. Watch the
						wonderlamp glint in the distance as golden sands swirl around you,
						while Genies and magic carpets drift through the skies. As you
						scroll, the Cave of Wonders roars open its mouth, and jewels sparkle
						with hidden secrets about the world of front-end enchantment. With
						parallax scrolls and animated wonder, this tale isn’t just told —
						it’s lived.
					</p>
				</div>
			</div>
		</div>
	);
}
export default MakingOf;

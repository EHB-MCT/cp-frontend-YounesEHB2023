import React from "react";
import SearchFilter from "../components/SearchFilter.jsx";
import Underline from "../components/Underline.jsx";
import MakingOfBtn from "../components/MakingOfBtn.jsx";
import banner from "../assets/images/banner_Aladdin.jpg";
function MakingOf() {
	return (
		<div className="background">
			<SearchFilter />
			<Underline />
			<div className="home-text">
				<h1>Making of - Aladdin en de wonderlamp</h1>
				<img className="banner-image" src={banner} alt="Logo" />{" "}
			</div>
			<div className="content-section">
				<div className="video-section">
					<h2>Explainer Video</h2>
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/xvFZjo5PgG0?si=uFtKUanPZtTET14y"
						title="Explainer Video"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
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
					<MakingOfBtn />
				</div>
			</div>
		</div>
	);
}
export default MakingOf;

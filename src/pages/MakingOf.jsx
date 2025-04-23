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
		</div>
	);
}
export default MakingOf;

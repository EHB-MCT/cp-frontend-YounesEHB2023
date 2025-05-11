import React from "react";
import Cave from "../assets/images/Cave.jpg";
// import Gradient from "../assets/images/Gradient.png";
const Scene2 = () => {
	return (
		<>
			{/* <img
				className="GradientBG"
				src={Gradient}
				alt="Logo"
				style={{
					position: "relative",
					top: "450px",
					width: "100%",
					height: "auto",
					backgroundSize: "cover",
					zIndex: 1,
				}}
			/> */}
			<img
				className="CaveBG"
				src={Cave}
				alt="Logo"
				style={{
					position: "absolute",
					top: "910px",
					left: 0,
					width: "100%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
				}}
			/>
		</>
	);
};

export default Scene2;

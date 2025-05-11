import React from "react";
import Home_Aladdin from "../assets/images/Home_Aladdin.jpg";
import Market from "../assets/images/Market.jpg";
const Scene3 = () => {
	return (
		<>
			<img
				className="Home_Aladdin"
				src={Home_Aladdin}
				alt="Logo"
				style={{
					position: "absolute",
					top: "3745px",
					left: 0,
					width: "100%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
				}}
			/>
			<img
				className="Market"
				src={Market}
				alt="Logo"
				style={{
					position: "absolute",
					top: "4430px",
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
export default Scene3;

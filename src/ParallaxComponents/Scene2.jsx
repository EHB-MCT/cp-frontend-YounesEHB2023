import React from "react";
import Cave from "../assets/images/Cave.jpg";
import CaveLamp from "../assets/images/Cave_Lamp.png";
import Stone from "../assets/images/Stone.png";
import Jafar from "../assets/images/jafar_aladdin.png";

const Scene2 = () => {
	return (
		<>
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

			<img
				className="CaveLamp"
				src={CaveLamp}
				alt="Logo"
				style={{
					position: "absolute",
					top: "1850px",
					left: 0,
					width: "100%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
				}}
			/>
			<img
				className="CaveBG"
				src={Cave}
				alt="Logo"
				style={{
					position: "absolute",
					top: "2800px",
					left: 0,
					width: "100%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
				}}
			/>
			<img
				className="CaveBG"
				src={Stone}
				alt="Logo"
				style={{
					position: "absolute",
					top: "3070px",
					left: "23%",
					width: "50%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
				}}
			/>
			<img
				src={Jafar}
				alt="Image 1"
				style={{
					position: "absolute",
					bottom: "50px",
					left: "58%",
					width: "20%",
					height: "auto",
					top: "3336px",
					zIndex: 1,
				}}
			/>
		</>
	);
};

export default Scene2;

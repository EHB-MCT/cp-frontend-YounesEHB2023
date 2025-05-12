import React from "react";
import Home_Aladdin from "../assets/images/Home_Aladdin.jpg";
import Market from "../assets/images/Market.jpg";
import CaveLamp from "../assets/images/Cave_Lamp.png";
import StreetAladdin from "../assets/images/Aladdin.svg";
import Lamp from "../assets/images/Lamp.png";
import Yasmine from "../assets/images/Yasmine.png";
const Scene3 = () => {
	return (
		<>
			<img
				className="CaveLamp"
				src={CaveLamp}
				alt="Logo"
				style={{
					position: "absolute",
					top: "3748px",
					left: 0,
					width: "100%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
				}}
			/>
			<p
				style={{
					position: "absolute",
					top: "3800px",
					left: "60%",
					width: "35%",
					color: "white",
					textAlign: "center",
					fontSize: "28px",
					zIndex: 1,
					fontFamily: "Merienda, cursive",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "rgba(128, 128, 128, 0.5)",
				}}
			>
				Alone in the tomb, Aladdin wishes to be home. A genie appears from the
				lamp when hovering over it and grants his wish{" "}
			</p>
			<img
				className="Lamp"
				src={Lamp}
				alt="Logo"
				style={{
					position: "absolute",
					top: "4110px",
					left: "45%",
					width: "10%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
					zIndex: 1,
				}}
			/>
			<img
				src={StreetAladdin}
				alt="Image 2"
				style={{
					position: "absolute",
					bottom: "50px",
					right: "20%",
					left: "15%",
					width: "150px",
					height: "auto",
					top: "4120px",
					zIndex: 1,
				}}
			/>
			{/*Home aladdin */}
			<img
				className="Home_Aladdin"
				src={Home_Aladdin}
				alt="Logo"
				style={{
					position: "absolute",
					top: "4695px",
					left: 0,
					width: "100%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
				}}
			/>
			<p
				style={{
					position: "absolute",
					top: "4760px",
					left: "60%",
					width: "35%",
					color: "white",
					textAlign: "center",
					fontSize: "28px",
					zIndex: 1,
					fontFamily: "Merienda, cursive",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "rgba(128, 128, 128, 0.5)",
				}}
			>
				He is instantly back in his house. Aladdin makes a second wish to see
				princess Jasmine.
			</p>
			<img
				src={StreetAladdin}
				alt="Image 2"
				style={{
					position: "absolute",
					bottom: "50px",
					right: "20%",
					left: "30%",
					width: "150px",
					height: "auto",
					top: "4920px",
					zIndex: 1,
				}}
			/>
			{/*Market */}
			<img
				className="Market"
				src={Market}
				alt="Logo"
				style={{
					position: "absolute",
					top: "5380px",
					left: 0,
					width: "100%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
				}}
			/>
			<p
				style={{
					position: "absolute",
					top: "5500px",
					left: "33%",
					width: "35%",
					color: "white",
					textAlign: "center",
					fontSize: "28px",
					zIndex: 1,
					fontFamily: "Merienda, cursive",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "rgba(128, 128, 128, 0.8)",
				}}
			>
				She appears before him. Now only one wish remains… what will his final
				choice be?
			</p>
			<img
				src={StreetAladdin}
				alt="Image 2"
				style={{
					position: "absolute",
					bottom: "50px",
					right: "20%",
					left: "30%",
					width: "150px",
					height: "auto",
					top: "5700px",
					zIndex: 1,
				}}
			/>
			<img
				src={Yasmine}
				alt="Image 2"
				style={{
					position: "absolute",
					bottom: "50px",
					right: "20%",
					left: "50%",
					width: "350px",
					height: "auto",
					top: "5784px",
					zIndex: 1,
				}}
			/>
		</>
	);
};
export default Scene3;

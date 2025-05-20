import React from "react";
import Cave from "../assets/images/Cave.jpg";
import CaveLayer2 from "../assets/images/LayerCave2.png";
import CaveLamp from "../assets/images/Cave_Lamp.png";
import Stone from "../assets/images/Stone.png";
import Jafar from "../assets/images/jafar_aladdin.png";
import StreetAladdin from "../assets/images/Aladdin.svg";
import JafarRight from "../assets/images/jafar_aladdinRight.png";
import Lamp from "../assets/images/Lamp.png";
import { motion } from "framer-motion";
const Scene2 = () => {
	return (
		<>
			<div className="Cave-entrance">
				{/* Jafar Rechter kant grot */}
				<img
					src={JafarRight}
					alt="Image 1"
					style={{
						position: "absolute",
						bottom: "50px",
						left: "48%",
						width: "270px",
						height: "auto",
						top: "1485px",
						zIndex: 1,
					}}
				/>
				<p
					style={{
						position: "absolute",
						top: "1150px",
						left: "15%",
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
					Aladdin follows the wizard Jafar into a hidden cave filled with
					mystery{" "}
				</p>
				{/* Aladdin Linker kant grot */}
				<img
					src={StreetAladdin}
					alt="Image 2"
					style={{
						position: "absolute",
						bottom: "50px",
						right: "20%",
						left: "35%",
						width: "150px",
						height: "auto",
						top: "1425px",
						zIndex: 1,
					}}
				/>
				{/*  Grot */}
				<motion.img
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
					initial={{ scaleX: 0, opacity: 0 }}
					whileInView={{ scaleX: 1, opacity: 1 }}
					viewport={{ once: true, amount: 0.2 }} // effect triggers when 20% of element is in viewport
					transition={{ duration: 1 }}
				/>
				<motion.img
					className="CaveBGLayer1"
					src={CaveLayer2}
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
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.2 }} // effect triggers when 20% of element is in viewport
					transition={{ duration: 3 }}
				/>
			</div>

			<div className="Tomb-begin">
				{/* Lamp */}
				<motion.img
					className="Lamp"
					src={Lamp}
					alt="Logo"
					style={{
						position: "absolute",
						top: "2250px",
						left: "45%",
						width: "10%",
						height: "auto",
						margin: 0,
						backgroundSize: "cover",
						zIndex: 1,
					}}
					animate={{
						y: [0, -15, 0], // Moves up 15px then back
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
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
				{/* Aladdin en jafar Lamp */}
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
						top: "2225px",
						zIndex: 1,
					}}
				/>
				<img
					src={JafarRight}
					alt="Image 1"
					style={{
						position: "absolute",
						bottom: "50px",
						left: "60%",
						width: "270px",
						height: "auto",
						top: "2435px",
						zIndex: 1,
					}}
				/>
				<p
					style={{
						position: "absolute",
						top: "2000px",
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
					Inside, they discover an ancient tomb holding a magical wonderlamp.
					Jafar tells Aladdin to take the lamp, but suddenly grows angry.
				</p>
				{/* Scene grot Buiten */}
			</div>

			<div className="Cave-exit">
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
				<p
					style={{
						position: "absolute",
						top: "3000px",
						left: "33%",
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
					After an argument, he traps Aladdin inside and disappears.
				</p>
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
			</div>
		</>
	);
};

export default Scene2;

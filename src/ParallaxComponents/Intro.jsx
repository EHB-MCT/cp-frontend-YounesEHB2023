import React, { useState } from "react";
import IntroBG from "../assets/images/Parallax_background-20.jpg";
import Jafar from "../assets/images/jafar_aladdinRight.png";
import StreetAladdin from "../assets/images/Aladdin.svg";
import Secret from "../assets/images/Secret.png"; // vervang dit door je eigen genie-afbeelding
import { motion } from "framer-motion";

const Intro = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div id="intro">
			<div id="intro-section">
				<motion.div
					style={{
						position: "absolute",
						top: "200px",
						left: "25%",
						transform: "translate(-50%, -50%)",
						color: "white",
						zIndex: 2,
						fontSize: "30px",
						textAlign: "center",
						fontFamily: "Merienda, cursive",
					}}
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
				>
					<h1> Aladdin and the wonderlamp </h1>
				</motion.div>

				{/* Background intro */}
				<img
					className="IntroBG"
					src={IntroBG}
					alt="Background"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "auto",
						margin: 0,
						backgroundSize: "cover",
					}}
				/>

				{/* Jafar intro */}
				<img
					src={Jafar}
					alt="Jafar"
					style={{
						position: "absolute",
						bottom: "50px",
						left: "64%",
						width: "200px",
						height: "auto",
						top: "446px",
						zIndex: 1,
					}}
				/>

				{/* Aladdin intro with hover effect (Easter Egg Secret) */}
				<img
					src={isHovered ? Secret : StreetAladdin}
					alt="Aladdin or Genie"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					style={{
						position: "absolute",
						bottom: "50px",
						right: "20%",
						left: "15%",
						width: "150px",
						height: "auto",
						top: "310px",
						zIndex: 1,
						transition: "transform 0.3s ease-in-out",
						transform: isHovered ? "scale(1.1)" : "scale(1)",
					}}
				/>
			</div>
		</div>
	);
};

export default Intro;

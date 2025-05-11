import React from "react";
import IntroBG from "../assets/images/Parallax_background-20.jpg";
import Jafar from "../assets/images/jafar_aladdin.png";
import StreetAladdin from "../assets/images/Aladdin.svg";
import { motion } from "framer-motion";
const Intro = () => {
	return (
		<div id="intro">
			<div
				id="intro-section"
				style={{
					textAlign: "center",
					padding: "50px 20px",
				}}
			>
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
					}}
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
				>
					<h1> Aladdin and the wonderlamp </h1>
				</motion.div>

				<img
					className="IntroBG"
					src={IntroBG}
					alt="Logo"
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
				<img
					src={Jafar}
					alt="Image 1"
					style={{
						position: "absolute",
						bottom: "50px",
						left: "69%",
						width: "150px",
						height: "auto",
						top: "505px",
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
						top: "310px",
						zIndex: 1,
					}}
				/>
				<h1 style={{ fontSize: "2rem", fontWeight: "bold" }}></h1>
			</div>
		</div>
	);
};

export default Intro;

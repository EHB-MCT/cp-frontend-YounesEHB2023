import React, { useState, useEffect } from "react";
// import IntroBG from "../assets/images/Parallax_background-20.jpg";
import IntroBG from "../assets/images/Parallax_layer2.png";
import Jafar from "../assets/images/jafar_aladdinRight.png";
import StreetAladdin from "../assets/images/Aladdin.svg";
import Secret from "../assets/images/Secret.png";
import LayerIntro from "../assets/images/Parallax_Layer_Palace.png";
import { motion, useAnimation } from "framer-motion";

const Intro = () => {
	const [scrollY, setScrollY] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div id="intro" style={{ position: "fixed" }}>
			<div
				id="intro-section"
				style={{
					position: "fixed",
					top: 0,
					overflow: "hidden",
				}}
			>
				{/* Parallax Background */}
				<motion.div
					className="IntroBG"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
						backgroundImage: `url(${IntroBG})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						zIndex: 0,
						transform: `translateY(${scrollY * 0.1}px)`,
					}}
				/>

				{/* Parallax Layer (fixed, does not move) */}
				<div
					className="LayerIntro"
					style={{
						position: "relative",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
						backgroundImage: `url(${LayerIntro})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						zIndex: 1,
						pointerEvents: "none",
					}}
				/>

				{/* Title */}
				<motion.div
					style={{
						position: "absolute",
						top: "200px",
						transform: "translate(-50%, -50%)",
						color: "white",
						zIndex: 2,
						fontSize: "30px",
						textAlign: "center",
						fontFamily: "Merienda, cursive",
						width: "100vw",
					}}
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
				>
					<h1> Aladdin and the wonderlamp </h1>
				</motion.div>

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
						top: "460px",
						zIndex: 2,
					}}
				/>

				{/* Aladdin intro with hover effect (Easter Egg Secret) */}
				<motion.img
					src={isHovered ? Secret : StreetAladdin}
					alt="Aladdin or Genie"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					initial={{ x: -60, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					style={{
						position: "absolute",
						bottom: "50px",
						right: "20%",
						left: "15%",
						width: "150px",
						height: "auto",
						top: "305px",
						zIndex: 2,
						transition: "transform 1s ease-in-out",
						transform: isHovered ? "scale(1.1)" : "scale(1)",
					}}
				/>
			</div>
		</div>
	);
};

export default Intro;

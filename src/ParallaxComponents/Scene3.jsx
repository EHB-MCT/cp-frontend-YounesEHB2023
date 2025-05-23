import React from "react";
import Home_Aladdin from "../assets/images/Home_Aladdin.jpg";
import Home_AladdinLayer from "../assets/images/Home_AladdinLayer.png";
import Market from "../assets/images/Market.png";
import MarketLayer2 from "../assets/images/MarketLayer2.png";
import CaveLamp from "../assets/images/Cave_Lamp.png";
import StreetAladdin from "../assets/images/Aladdin.svg";
import Lamp from "../assets/images/Lamp.png";
import Genie from "../assets/images/Genie.png";
import GenieWish from "../assets/images/Genie_Wish.png";
import Yasmine from "../assets/images/Yasmine.png";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Scene3 = () => {
	const [showGenie, setShowGenie] = useState(false);
	const timerRef = useRef(null);

	const handleLampMouseEnter = () => {
		timerRef.current = setTimeout(() => {
			setShowGenie(true);
		}, 3000);
	};

	const handleLampMouseLeave = () => {
		clearTimeout(timerRef.current);
		setShowGenie(false);
	};

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
					top: "3850px",
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
				Alone in the tomb, Aladdin wishes to be home. A genie appears
				<br />
				<br />
				Rub the lamp!
			</p>
			{/* Lamp with hover logic */}
			<motion.img
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
				onMouseEnter={handleLampMouseEnter}
				onMouseLeave={handleLampMouseLeave}
				whileHover={{ scale: 1.1, rotate: 10 }}
				transition={{ type: "spring", stiffness: 300 }}
			/>
			{/* Genie appears with fade in */}
			<AnimatePresence>
				{showGenie && (
					<motion.img
						className="Genie"
						src={Genie}
						alt="Logo"
						style={{
							position: "absolute",
							top: "3815px",
							left: "29%",
							width: "20%",
							height: "auto",
							margin: 0,
							backgroundSize: "cover",
							zIndex: 1,
						}}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.5 }}
					/>
				)}
			</AnimatePresence>
			<motion.img
				src={StreetAladdin}
				alt="Image 2"
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1 }}
				style={{
					position: "absolute",
					bottom: "50px",
					right: "20%",
					left: "15%",
					width: "150px",
					height: "auto",
					top: "4170px",
					zIndex: 1,
				}}
			/>
			{/* Home aladdin */}
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
			<motion.img
				className="Home_Aladdin"
				src={Home_AladdinLayer}
				alt="Logo"
				style={{
					position: "absolute",
					top: "4700px",
					left: 0,
					width: "100%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
				}}
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1.5 }}
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
			<motion.img
				src={StreetAladdin}
				alt="Image 2"
				style={{
					position: "absolute",
					bottom: "50px",
					right: "20%",
					left: "30%",
					width: "150px",
					height: "auto",
					top: "4930px",
					zIndex: 1,
				}}
				initial={{ x: -200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.8 }}
			/>
			<motion.img
				className="Lamp"
				src={Lamp}
				alt="Logo"
				style={{
					position: "absolute",
					top: "5095px",
					left: "55%",
					width: "10%",
					height: "auto",
					margin: 0,
					backgroundSize: "cover",
					zIndex: 1,
				}}
				onMouseEnter={handleLampMouseEnter}
				onMouseLeave={handleLampMouseLeave}
				whileHover={{ scale: 1.1, rotate: 10 }}
				transition={{ type: "spring", stiffness: 300 }}
			/>
			{/* Genie appears with fade in */}
			<AnimatePresence>
				{showGenie && (
					<motion.img
						className="Genie"
						src={GenieWish}
						alt="Logo"
						style={{
							position: "absolute",
							top: "4877px",
							left: "42%",
							width: "15%",
							height: "auto",
							margin: 0,
							backgroundSize: "cover",
							zIndex: 1,
						}}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.5 }}
					/>
				)}
			</AnimatePresence>
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
			<motion.img
				className="Market"
				src={MarketLayer2}
				alt="Logo"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1 }}
				style={{
					position: "absolute",
					top: "5350px",
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
					top: "5440px",
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
				She appears in front of him. Now only one wish remains… what will his
				final choice be?
			</p>
			<motion.img
				src={StreetAladdin}
				alt="Image 2"
				initial={{ x: -60, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1 }}
				style={{
					position: "absolute",
					bottom: "50px",
					right: "20%",
					left: "30%",
					width: "150px",
					height: "auto",
					top: "5650px",
					zIndex: 1,
				}}
			/>
			<motion.img
				src={Yasmine}
				alt="Image 2"
				initial={{ x: 60, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1 }}
				style={{
					position: "absolute",
					bottom: "50px",
					right: "20%",
					left: "50%",
					width: "350px",
					height: "auto",
					top: "5730px",
					zIndex: 1,
				}}
			/>
		</>
	);
};
export default Scene3;

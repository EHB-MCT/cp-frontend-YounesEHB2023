import React from "react";

const Intro = () => {
	return (
		<div id="intro">
			<div
				id="intro-section"
				style={{
					textAlign: "center",
					position: "relative",
					padding: "50px 20px",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "300px",
						left: "50%",
						transform: "translate(-50%, -50%)",
						color: "white",
						zIndex: 2,
						fontSize: "20px",
					}}
				>
					<h1> Aladdin and the wonderlamp </h1>
				</div>
				<img
					src="src/images/background_parallax.jpg"
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
				<img
					src="src\images\jafar_aladdin.png"
					alt="Image 1"
					style={{
						position: "absolute",
						bottom: "50px",
						left: "20%",
						width: "350px",
						height: "auto",
						top: "430px",
						zIndex: 1,
					}}
				/>
				<img
					src="src\images\streetboy_aladdin.png"
					alt="Image 2"
					style={{
						position: "absolute",
						bottom: "50px",
						right: "20%",
						width: "200px",
						height: "auto",
						top: "500px",
						zIndex: 1,
					}}
				/>
				<h1 style={{ fontSize: "2rem", fontWeight: "bold" }}></h1>
			</div>
		</div>
	);
};

export default Intro;

import React from "react";
import { useNavigate } from "react-router-dom";
import arrowImg from "../assets/images/Arrow.svg";

const ArrowBack = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};

	return (
		<div
			style={{ position: "absolute", top: "40px", left: "40px", zIndex: 100 }}
		>
			<img
				src={arrowImg}
				alt="Back to home"
				style={{
					cursor: "pointer",
					width: "40px",
					height: "40px",
					position: "relative",
				}}
				onClick={handleClick}
			/>
		</div>
	);
};

export default ArrowBack;

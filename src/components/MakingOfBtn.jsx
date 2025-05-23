import React from "react";
import { useNavigate } from "react-router-dom";
const MakingOfBtn = () => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		navigate("/parallax");
		window.scrollTo(0, 0);
	};

	return (
		<button className="MakingOf-btn" onClick={handleClick}>
			Visit website
		</button>
	);
};

export default MakingOfBtn;

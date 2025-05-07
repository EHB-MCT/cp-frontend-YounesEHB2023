import React from "react";
import underline from "../assets/images/underline_frontend.svg";
const Underline = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<img className="line" src={underline} alt="Logo" />
		</div>
	);
};

export default Underline;

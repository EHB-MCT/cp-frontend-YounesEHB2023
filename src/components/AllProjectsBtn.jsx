import React from "react";
import { Link } from "react-router-dom";

const AllProjectsBtn = () => {
	return (
		<Link to="/projects" className="all-projects-btn">
			ALL PROJECTS
		</Link>
	);
};

export default AllProjectsBtn;

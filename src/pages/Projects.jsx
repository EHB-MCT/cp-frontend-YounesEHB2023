import { useNavigate } from "react-router-dom";
import projects from "../data/project.json"; // Adjust the path based on your file structure
import SearchFilter from "../components/SearchFilter.jsx"; // Adjust the path based on your file structure
import Underline from "../components/Underline.jsx"; // Adjust the path based on your file structure
import Spotlight from "../components/Spotlight.jsx"; // Adjust the path based on your file structure
function Projects() {
	return (
		<div className="background">
			<SearchFilter />
			<Underline />
			<div className="home-text">
				<h1>All projects</h1>
				<Spotlight />
				<Spotlight />
			</div>
		</div>
	);
}

export default Projects;

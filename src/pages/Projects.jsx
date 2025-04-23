import { useNavigate } from "react-router-dom";
import projects from "../data/project.json"; // Adjust the path based on your file structure

function Projects() {
	const navigate = useNavigate();

	const handleProjectClick = (id) => {
		navigate(`/projects/${id}`);
	};

	return (
		<div>
			<h1>Projects</h1>
			<p>This is the Projects page.</p>
			<div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
				{projects.map((project) => (
					<div
						key={project.id}
						style={{
							width: "400px",
							height: "250px",
							backgroundColor: "black",
							cursor: "pointer",
							backgroundImage: `url(${project.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						onClick={() => handleProjectClick(project.id)}
					>
						<div
							style={{
								color: "white",
								backgroundColor: "rgba(0, 0, 0, 0.5)",
								padding: "10px",
							}}
						>
							<h3>{project.name}</h3>
							<p>{project.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;

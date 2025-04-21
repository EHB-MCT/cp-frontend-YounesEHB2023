import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetailsPage from "./pages/ProjectsPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:id" element={<ProjectDetailsPage />} />
			</Routes>
		</Router>
	);
}

export default App;

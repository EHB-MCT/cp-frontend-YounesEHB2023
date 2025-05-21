import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import MakingOf from "./pages/MakingOf.jsx";
import Parallax from "./pages/Parallax.jsx";

function App() {
	const redirect = new URLSearchParams(window.location.search).get("redirect");
	if (redirect) {
		// this helps the show the parallax when there is a 404 error
		window.history.replaceState(
			null,
			"",
			`/cp-frontend-YounesEHB2023${redirect}`
		);
	}
	return (
		<BrowserRouter basename="/cp-frontend-YounesEHB2023">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="makingof" element={<MakingOf />} />
				</Route>
				<Route path="parallax" element={<Parallax />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

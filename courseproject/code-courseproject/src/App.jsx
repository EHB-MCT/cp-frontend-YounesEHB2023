import { useState } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import MakingOf from "./pages/MakingOf.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Navbar />} />
			<Route index element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/makingof" element={<MakingOf />} />
			<Navbar />
		</Routes>
	</BrowserRouter>;
}
export default App;

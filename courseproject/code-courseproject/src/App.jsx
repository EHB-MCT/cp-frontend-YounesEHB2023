import { useState } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import MakingOf from "./pages/MakingOf.jsx";
import Projects from "./pages/Projects.jsx";
import Parallax from "./pages/Parallax.jsx";

function App() {
    return (
        <>
            <h1>React Router Demo</h1>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="makingof" element={<MakingOf />} />
                    </Route>
                    <Route path="parallax" element={<Parallax />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

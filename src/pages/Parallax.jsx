import Intro from "../ParallaxComponents/Intro";
import Scene2 from "../ParallaxComponents/Scene2";
import Scene3 from "../ParallaxComponents/Scene3";
import ArrowBack from "../components/ArrowBack";
function Parallax() {
	return (
		<div className="parallax-container">
			<ArrowBack />
			<Intro />
			<Scene2 />
			<Scene3 />
		</div>
	);
}
export default Parallax;

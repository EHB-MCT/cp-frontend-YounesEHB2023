import Intro from "../ParallaxComponents/Intro";
import Scene2 from "../ParallaxComponents/Scene2";
import Scene3 from "../ParallaxComponents/Scene3";
function Parallax() {
	return (
		<div className="parallax-title">
			{/* <Navbar2 /> */}
			<Intro />
			<Scene2 />
			{/* <Scene3 /> */}
		</div>
	);
}
export default Parallax;

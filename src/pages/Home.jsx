import AllProjectsBtn from "../components/AllProjectsBtn";
import SearchFilter from "../components/SearchFilter";
import SpotlightHome from "../components/SpotlightHome";
import Underline from "../components/Underline";
function Home() {
	return (
		<div className="background">
			<SearchFilter />
			<Underline />
			<div className="home-text">
				<h1>Int the spotlight</h1>
				<SpotlightHome />
				<AllProjectsBtn />
			</div>
		</div>
	);
}
export default Home;

import SearchFilter from "../components/SearchFilter";
import Spotlight from "../components/Spotlight";
import Underline from "../components/Underline";
function Home() {
	return (
		<div>
			<SearchFilter />
			<Underline />
			<div className="home-text">
				<h1>Int the spotlight</h1>
				<Spotlight />
			</div>
		</div>
	);
}
export default Home;

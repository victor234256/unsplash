import { Gallery } from "./Gallery";
import { SearchBar } from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

const App = () => {
	return (
		<main>
			<ThemeToggle />
			<SearchBar />
			<Gallery />
		</main>
	);
};
export default App;

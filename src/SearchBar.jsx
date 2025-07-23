import { useGlobalContext } from "./context";

export const SearchBar = () => {
	const { setSearchValue } = useGlobalContext();
	function handleSubmit(e) {
		e.preventDefault();
		const searchValue = e.target.elements.search.value;
		if (!searchValue) return;
		setSearchValue(searchValue);
	}
	return (
		<section>
			<h1 className="title">Unsplash Images</h1>
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="search"
					placeholder="cat"
					className="form-input search-input"
				/>
				<button className="btn" type="submit">
					Search
				</button>
			</form>
		</section>
	);
};

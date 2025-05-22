function SearchFilter({ onSearch, genres = [] }) {
	// Add default filters
	const defaultGenres = [
		"avontuur",
		"horror",
		"fantasie",
		"mythologie",
		"dierenverhaal",
		"romantiek",
		"magie",
	];
	const allGenres = Array.from(new Set([...defaultGenres, ...genres]));

	const handleSearch = () => {
		const query = document.querySelector(".searchFilter input").value;
		const genre = document.querySelector(".searchFilter select").value;
		onSearch(query, genre);
	};

	return (
		<div className="searchFilter">
			<input
				type="text"
				placeholder="Search for a fairy tale"
				onChange={(event) =>
					onSearch(
						event.target.value,
						document.querySelector(".searchFilter select").value
					)
				}
			/>
			<select
				onChange={(event) =>
					onSearch(
						document.querySelector(".searchFilter input").value,
						event.target.value
					)
				}
			>
				<option value="">All Genres</option>
				{allGenres.map((genre) => (
					<option key={genre} value={genre}>
						{genre}
					</option>
				))}
			</select>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
}

export default SearchFilter;

import React, { useState } from "react";

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

	const [search, setSearch] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");

	const handleSearch = () => {
		onSearch(search, selectedGenre);
	};

	return (
		<div className="searchFilter">
			<input
				type="text"
				placeholder="Search for a fairy tale"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
			<select
				value={selectedGenre}
				onChange={(event) => setSelectedGenre(event.target.value)}
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

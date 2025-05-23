import React, { useState } from "react";

function SearchFilter({ onSearch }) {
	const [search, setSearch] = useState("");

	const handleSearch = () => {
		onSearch(search);
	};

	return (
		<div className="searchFilter">
			<input
				type="text"
				placeholder="Search for a fairy tale"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
}

export default SearchFilter;

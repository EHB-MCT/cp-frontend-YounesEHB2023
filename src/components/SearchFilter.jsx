function SearchFilter({ onSearch }) {
	return (
		<div className="searchFilter">
			<input
				type="text"
				placeholder="Search for a fairy tale"
				onChange={(event) => onSearch(event.target.value)}
			/>
		</div>
	);
}

export default SearchFilter;

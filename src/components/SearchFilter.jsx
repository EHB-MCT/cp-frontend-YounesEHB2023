function SearchFilter({ onSearch }) {
	return (
		<div className="searchFilter">
			<input
				type="text"
				placeholder="Search for a fairy tale"
				onChange={(event) => onSearch(event.target.value)}
			/>
			<button
				onClick={() =>
					onSearch(document.querySelector(".searchFilter input").value)
				}
			>
				Search
			</button>
		</div>
	);
}

export default SearchFilter;

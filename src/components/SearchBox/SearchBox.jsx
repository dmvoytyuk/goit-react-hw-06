const SearchBox = ({ value, searchBoxOnChange }) => {
	return (
		<div>
			<p style={{ margin: 0 }}>Find contacts by name:</p>
			<input type="text" value={value} onChange={searchBoxOnChange} />
		</div>
	);
};

export default SearchBox;

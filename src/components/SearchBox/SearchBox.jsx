import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
	const dispatch = useDispatch();
	const inputValue = useSelector(selectNameFilter);
	return (
		<div>
			<p style={{ margin: 0 }}>Find contacts by name:</p>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => dispatch(changeFilter(e.target.value))}
			/>
		</div>
	);
};

export default SearchBox;

const SearchBar = ({searchText, inStockOnly, onSearchTextChange, onInStockChange}) => {
	return (
		<form>
			<input 
			type="text" 
			placeholder="Search..." 
			value={searchText}  
			onChange={(e) => onSearchTextChange(e.target.value)}
			/>
			<div>
				<input 
				id="checkbox" 
				type="checkbox" 
				value={onInStockChange} 
				onChange={(e) => onInStockChange(e.target.checked)}
				/> 
				{/* Receive inStockOnly i.e. checkbox */}
				<label htmlFor="checkbox">Show only inStock</label>
			</div>
		</form>
	);
	
};

export default SearchBar;
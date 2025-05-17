import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import React from 'react';

// any props are passed in 
const FilterableProductTable = ({ products }) => {
	const [searchText, setSearchText] = React.useState(''); // state create
	const [inStockOnly, setInStockOnly] = React.useState(false);

	return (
		<>


			<SearchBar 
				searchText={searchText} 
				inStockOnly={inStockOnly} 
				onSearchTextChange={setSearchText}
				onInStockChange={setInStockOnly}
			/> 
			{/* Pass the searchText state & inStockOnly i.e. checkbox & others --> pass as props parents to child component */}
			<ProductTable searchText={searchText} inStockOnly={inStockOnly} products={products} />

		</>
	);
};

export default FilterableProductTable;
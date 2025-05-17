import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({products}) => {

	const rows = [];

	

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{/* component render for the dynamic data */}
				<ProductCategoryRow category={'Fruits'} />
				<ProductRow />
			</tbody>
		</table>
	)
}

export default ProductTable;
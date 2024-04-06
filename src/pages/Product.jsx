import { useEffect, useState } from 'react';
import '../assets/styles/main.scss';

import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
/*
	Challenge for the Product
	- Try to use image transform scale in order to fix zoom in issue for the image cards
	- Remove all the logic board from Product and transfer it to App
	- Only the productData will be left 
	- Use it as a Props to pass it from App

	Possible Solution 
	- for the transferring the ProductTargetData to RootLayout is useContext 
	OR
	- create custom hook where to save the array target then import it to the page/component needs 


	so ang gagawin mag kakaroon ng conditional where is default is all product and filter out the electronics 
	else if napindot na yun ibang categories ay lilipat na siya sa ibang data
*/

export default function Product({ productData, getProductTarget }) {
	const categoryBtn = [
		{ name: 'All Products' },
		{ name: "Women's", value: "women's clothing" },
		{ name: "Men's", value: "men's clothing" },
		{ name: 'Jewelery', value: 'jewelery' }
	];
	const [categorySort, setCategorySort] = useState([]);
	const { data, loading, error } = useFetch(
		`https://fakestoreapi.com/products/category/${categorySort}`
	);

	useEffect(() => {
		console.log(data);
	}, [data]);

	const productDataMap = data.map((item) => (
		<Card
			key={item.id}
			image={item.image}
			title={item.title}
			price={item.price}
			getProductTarget={getProductTarget}
		/>
	));

	if (error) console.log(error);

	return (
		<>
			<section className='h-auto px-10 py-14 productContainer'>
				<div className='flex flex-col lg:flex-row lg:items-center gap-4'>
					<h1 className='text-4xl font-semibold'>Today’s for you</h1>
					{categoryBtn?.map((item, index) => {
						return (
							<button
								key={index}
								className='lg:mt-4 px-10 py-1  border-redOrange hover:bg-redOrangeDark text-redOrange hover:text-white font-medium rounded-md transition duration-200 ease-out hover:ease-in border-2'
								onClick={() => setCategorySort(item?.value)}
							>
								{item.name}
							</button>
						);
					})}
				</div>

				{loading ? (
					<h1>Loading all Products</h1>
				) : (
					<div className='mx-auto my-10 max-w-[80rem] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-10 justify-items-center'>
						{productDataMap}
					</div>
				)}
			</section>
		</>
	);
}

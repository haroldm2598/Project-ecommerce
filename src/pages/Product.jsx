import '../assets/styles/main.scss';

import Card from '../components/Card';
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
*/

export default function Product({ productData, getProductTarget }) {
	const productDataMap = productData.map((item) => (
		<Card
			key={item.id}
			image={item.image}
			title={item.title}
			price={item.price}
			getProductTarget={getProductTarget}
		/>
	));

	return (
		<>
			<section className='h-auto px-10 py-14 productContainer'>
				<h1 className='text-4xl font-semibold'>Product</h1>
				<div className='mx-auto my-10 max-w-[80rem] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-10 justify-items-center'>
					{productDataMap}
				</div>
			</section>
		</>
	);
}

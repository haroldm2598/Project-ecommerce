// 'https://fakestoreapi.com/products?limit=12'
import { useEffect, useState } from 'react';
import '../assets/styles/main.scss';

import Card from '../components/Card';
import axios from 'axios';

export default function Product() {
	const [currentUrl, setCurrentUrl] = useState(
		'https://fakestoreapi.com/products?limit=12'
	);
	const [productData, setProductData] = useState([]);
	const [productTarget, setProductTarget] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(currentUrl);
				setProductData(response.data);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, [currentUrl]);

	function getProductTarget(image, title, price) {
		setProductTarget((oldItem) => [...oldItem, { image, title, price }]);
	}

	console.log(productTarget);

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
				<div className='my-10 grid grid-cols-3 auto-rows-auto gap-10 justify-items-center'>
					{productDataMap}
				</div>
			</section>
		</>
	);
}

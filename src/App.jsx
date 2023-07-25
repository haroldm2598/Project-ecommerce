import './assets/styles/main.scss';
import { useState, useEffect } from 'react';
import {
	createHashRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import { nanoid } from 'nanoid';

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

// Layout
import RootLayout from './layout/RootLayout';

// Custom hooks
import useFetch from './hooks/useFetch';

function App() {
	const { data, loading, error } = useFetch(
		'https://fakestoreapi.com/products?limit=12'
	);

	const [productData, setProductData] = useState([]);
	const [productTarget, setProductTarget] = useState([]);

	useEffect(() => {
		setProductData(data);
	}, [data]);

	if (loading) return <h1>LOADING!!!!</h1>;
	if (error) console.log(error);

	function getProductTarget(image, title, price) {
		setProductTarget((oldItem) => {
			oldItem = [
				...oldItem,
				{ productId: nanoid(), image, title, price, quantity: 1 }
			];

			return oldItem.filter((obj, index, self) => {
				return index === self.findIndex((t) => t.title === obj.title);
			});
		});
	}

	const router = createHashRouter(
		createRoutesFromElements(
			<Route
				path='/'
				element={
					<RootLayout
						productTarget={productTarget}
						setProductTarget={setProductTarget}
					/>
				}
			>
				<Route index element={<Home />} />
				<Route
					path='Product'
					element={
						<Product
							productData={productData}
							getProductTarget={getProductTarget}
						/>
					}
				/>
				<Route path='Contact' element={<Contact />} />
			</Route>
		)
	);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

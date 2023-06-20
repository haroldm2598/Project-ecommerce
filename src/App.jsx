import './assets/styles/main.scss';
import { useState, useEffect } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import axios from 'axios';

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

// Layout
import RootLayout from './layout/RootLayout';

function App() {
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

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout productTarget={productTarget} />}>
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

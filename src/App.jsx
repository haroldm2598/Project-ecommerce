import './assets/styles/main.scss';
import { useState, useEffect } from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

// Layout
import RootLayout from './layout/RootLayout';

// const url = 'https://fakestoreapi.com/products?limit=12';

function App() {
	const [currentUrl, setCurrentUrl] = useState(
		'https://fakestoreapi.com/products?limit=12'
	);
	const [productData, setProductData] = useState([]);
	const [productTarget, setProductTarget] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get(currentUrl);
			setProductData(response.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchData();
	}, [currentUrl]);

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

	const router = createBrowserRouter(
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

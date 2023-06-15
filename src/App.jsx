import './assets/styles/main.scss';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

// Layout
import RootLayout from './layout/RootLayout';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path='Product' element={<Product />} />
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

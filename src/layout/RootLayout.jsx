import '../assets/styles/main.scss';

import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaHamburger } from 'react-icons/fa';

// COMPONENTS
import Card from '../components/Card';
import Drawer from '../components/Drawer';

export default function RootLayout({ productTarget, setProductTarget }) {
	const [showNavbar, setShowNavbar] = useState(false);
	const [totalPrice, setTotalPrice] = useState([]);

	const getCurrentPrices = (totalPrices, productId) => {
		setTotalPrice((oldTotalPrice) => {
			oldTotalPrice = [...oldTotalPrice, { productId, totalPrices }];
			return oldTotalPrice.filter((obj, index, self) => {
				return (
					index === self.findLastIndex((t) => t.productId === obj.productId)
				);
			});
		});
	};

	function deleteCart(event, productId) {
		event.preventDefault();
		setProductTarget(
			productTarget.filter((item) => item.productId !== productId)
		);

		setTotalPrice(totalPrice.filter((item) => item.productId !== productId));
	}

	function handleShowNavbar() {
		setShowNavbar((oldState) => !oldState);
	}

	// const [currentCount, setCurrentCount] = useState([]);
	// const [currentPrice, setCurrentPrice] = useState(productTotalPrice || []);

	// function IncrementPrice(currentProductId) {
	// 	const currentQuantity = productTarget.map((item) => {
	// 		if (item.productId === currentProductId) {
	// 			return { quantity: item.quantity++ };
	// 		} else {
	// 			return item;
	// 		}
	// 	});
	// 	const priceIncrement = productTarget.map((item) => {
	// 		if (item.productId === currentProductId) {
	// 			return { price: item.price + item.price };
	// 		} else {
	// 			return item;
	// 		}
	// 	});

	// 	setCurrentCount(currentQuantity);
	// 	setCurrentPrice((oldPrice) => oldPrice + currentPrice);
	// }

	// function decrementPrice(currentProductId) {
	// 	const currentQuantity = productTarget.map((item) => {
	// 		if (item.productId === currentProductId) {
	// 			if (item.quantity <= 1) {
	// 				return { quantity: 1 };
	// 			} else {
	// 				return { quantity: item.quantity-- };
	// 			}
	// 		} else {
	// 			return item;
	// 		}
	// 	});

	// 	setCurrentCount(currentQuantity);
	// 	setCurrentPrice((oldPrice) => {
	// 		return currentCount <= 1 ? oldPrice : oldPrice - currentPrice;
	// 	});
	// }

	const productTargetMap = productTarget.map((item) => (
		<Card
			key={item.productId}
			productId={item.productId}
			image={item.image}
			title={item.title}
			price={item.price}
			quantity={item.quantity}
			isCount={true}
			getCurrentPrices={getCurrentPrices}
			deleteCart={deleteCart}
		/>
	));

	return (
		<div className='rootLayout'>
			<header className='shadow-md relative z-30'>
				<nav className='navbarContainer'>
					<h1 className='navbarContainer__logo'>
						<Link to='/'>FakeStore</Link>
					</h1>
					<div className={` ${showNavbar ? 'showNavbarActive' : 'hideNavbar'}`}>
						<div className='navbarContainer__navList'>
							<NavLink
								to='/'
								className='navbarContent__links  navbarContent__grow  my-5 md:ml-5'
							>
								Home
							</NavLink>

							<NavLink
								to='/Product'
								className='navbarContent__links  navbarContent__grow  my-5 md:ml-10'
							>
								Product
							</NavLink>

							<NavLink
								to='/Contact'
								className='navbarContent__links  navbarContent__grow  my-5 md:ml-10'
							>
								Contact
							</NavLink>
						</div>
					</div>

					<div className='mr-2 md:mr-0 drawer-content grow shrink overflow-hidden flex justify-end'>
						<label htmlFor='my-drawer' aria-label='open sidebar'>
							<FaShoppingCart className='cursor-pointer' size={30} />
						</label>
					</div>

					<button onClick={handleShowNavbar} className='md:hidden'>
						<span>
							<FaHamburger />
						</span>
					</button>
				</nav>
			</header>

			<Drawer
				data={productTargetMap}
				totalPrice={totalPrice}
				setTotalPrice={setTotalPrice}
			/>

			<main className='relative z-20'>
				<Outlet />
			</main>
		</div>
	);
}

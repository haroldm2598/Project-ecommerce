import '../assets/styles/main.scss';

import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

// COMPONENTS
import CartContainer from '../components/CartContainer';
import Card from '../components/Card';

// HOOKS
import useClickOutside from '../hooks/useClickOutside';

export default function RootLayout({ productTarget }) {
	// const productTotalPrice = productTarget.map((item) => {
	// 	return item.price;
	// });

	const [isShow, setIsShow] = useState(false);
	const cartRef = useClickOutside(() => setIsShow(false));

	// use a function where get the total prices and send it to props
	// - Then reduce the similar id for the price,
	// - After that reduce again for the final total
	const [totalPrice, setTotalPrice] = useState([]);

	function getCurrentPrices(price, currentProductId) {
		console.log(currentProductId);

		return setTotalPrice((prevPrice) => {
			return [...prevPrice, { price }];
		});
	}

	console.log(totalPrice);

	// const [currentCount, setCurrentCount] = useState([]);
	// const [currentPrice, setCurrentPrice] = useState(productTotalPrice || []);

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

	function handleShow() {
		setIsShow((oldState) => !oldState);
	}

	const productTargetMap = productTarget.map((item) => (
		<Card
			key={item.productId}
			productId={item.productId}
			image={item.image}
			title={item.title}
			price={item.price}
			quantity={item.quantity}
			isCount={true}
			totalPrice={totalPrice}
			setTotalPrice={setTotalPrice}
			getCurrentPrices={getCurrentPrices}
		/>
	));

	return (
		<div className='rootLayout'>
			<header>
				<nav className='h-20 px-10 flex flex-wrap flex-row justify-between items-center font-bold '>
					<h1 className='grow shrink text-4xl'>
						<Link to='/'>FakeStore</Link>
					</h1>

					<div className='grow shrink basis-96 '>
						<NavLink to='/' className='ml-10'>
							Home
						</NavLink>
						<NavLink to='/Product' className='ml-10'>
							Product
						</NavLink>
						<NavLink to='/Contact' className='ml-10'>
							Contact
						</NavLink>
					</div>

					<div className='grow shrink text-center' ref={cartRef}>
						<span className='navbarCart' onClick={handleShow}>
							<FaShoppingCart className='navbarCart__cart' />
						</span>
						<CartContainer
							isShow={isShow}
							// productTotalPrice={productTotalPrice}
							totalPrice={totalPrice}
							setTotalPrice={setTotalPrice}
						>
							{productTargetMap}
						</CartContainer>
					</div>
				</nav>
				{/* Background overlay for cart */}
				{/* <div className=' bg-redOrange/50 w-full h-screen fixed'></div> */}
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	);
}

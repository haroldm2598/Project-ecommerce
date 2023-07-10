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

	const storeTotalPrice = [];
	const [totalPrice, setTotalPrice] = useState(storeTotalPrice);

	/*
		remove the duplicate id from array
		return only the result of new unique array
		working but it will only result the first element. 
		the goal is to get the last array
	*/

	function getCurrentPrices(price, productId) {
		storeTotalPrice.push(price);

		// version 1
		// return setTotalPrice((prevPrice) => [...prevPrice, { price }]);

		// version 2
		// setTotalPrice((prevPrice) => {
		// 	return productTarget.map((item) => {
		// 		if (item.productId === currentProductId) {
		// 			return [item.price, price].reduce((acc, cur) => acc + cur, 0);
		// 		} else {
		// 			return [...prevPrice].filter((item) => typeof item === 'number');
		// 		}
		// 	});
		// });

		setTotalPrice((oldTotalPrice) => {
			// setPokemonData((oldPokemon) => {
			// 	oldPokemon = [...oldPokemon, getUrl.data];
			// 	const uniqueState = [
			// 		...new Map(oldPokemon.map((p) => [p.id, p])).values()
			// 	];
			// 	return uniqueState;
			// });

			// VERSION 1 but getting the first index
			// const newTotalPrice = [...oldTotalPrice, { productId, price }];

			// const uniquePrice = newTotalPrice.filter((obj, index, self) => {
			// 	console.log(obj.productId);
			// 	return index === self.findIndex((t) => t.productId === obj.productId);
			// });

			// return uniquePrice;

			// VERSION 2 testing
			oldTotalPrice = [...oldTotalPrice, { productId, price }];

			const uniqueState = [
				...new Map(oldTotalPrice.map((p) => [p.productId, p])).values()
			];

			console.log(uniqueState);
		});
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

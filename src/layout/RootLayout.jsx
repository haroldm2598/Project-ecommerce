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
	const productQuantity = productTarget.map((item) => item.quantity);
	const productTotalPrice = productTarget.map((item) => item.price);

	const [isShow, setIsShow] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const cartRef = useClickOutside(() => setIsShow(false));

	const [currentCount, setCurrentCount] = useState(productQuantity || []);
	const [currentPrice, setCurrentPrice] = useState(productTotalPrice || []);

	console.log(productQuantity);
	console.log(typeof currentCount);

	function decrementPrice() {
		setCurrentCount((oldCount) => {
			if (oldCount <= 1) {
				return (oldCount = 1);
			} else {
				return oldCount - 1;
			}
		});
		setCurrentPrice((oldPrice) => {
			return currentCount <= 1 ? oldPrice : oldPrice - currentPrice;
		});
	}

	function IncrementPrice() {
		setCurrentCount((oldCount) => {...oldCount, [oldCount + 1]});
		setCurrentPrice((oldPrice) => oldPrice + currentPrice);
	}

	function handleShow() {
		setIsShow((oldState) => !oldState);
	}

	const productTargetMap = productTarget.map((item, id) => (
		<Card
			key={id}
			image={item.image}
			title={item.title}
			price={item.price}
			isCount={true}
			currentCount={currentCount}
			currentPrice={currentPrice}
			decrementPrice={decrementPrice}
			IncrementPrice={IncrementPrice}
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
							productTotalPrice={productTotalPrice}
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

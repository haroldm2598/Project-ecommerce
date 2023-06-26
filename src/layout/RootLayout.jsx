import '../assets/styles/main.scss';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import CartContainer from '../components/CartContainer';
import Card from '../components/Card';

let useClickOutside = (handler) => {
	const cartRef = useRef();

	useEffect(() => {
		const cartEvent = (event) => {
			if (!cartRef.current.contains(event.target)) {
				handler();
			}
		};
		document.body.addEventListener('click', cartEvent);

		return () => document.body.removeEventListener('click', cartEvent);
	});

	return cartRef;
};

export default function RootLayout({ productTarget }) {
	const [isShow, setIsShow] = useState(false);
	// const [currentCount, setCurrentCount] = useState(1);
	const cartRef = useClickOutside(() => setIsShow(false));

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
			// currentCount={currentCount}
			// setCurrentCount={setCurrentCount}
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
						<CartContainer isShow={isShow}>{productTargetMap}</CartContainer>
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

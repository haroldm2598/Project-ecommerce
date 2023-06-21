import '../assets/styles/main.scss';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import CartContainer from '../components/CartContainer';
import Card from '../components/Card';

export default function RootLayout({ productTarget }) {
	const [isShow, setIsShow] = useState(false);
	function handleShow() {
		setIsShow(!isShow);
	}

	// function handleHide(e) {
	// 	if (e.target) setIsShow(false);
	// 	console.log(isShow);
	// }

	const productTargetMap = productTarget.map((item, id) => (
		<Card key={id} image={item.image} title={item.title} price={item.price} />
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
					<div className='grow shrink text-center'>
						<span className='navbarCart' onClick={handleShow}>
							<FaShoppingCart className='navbarCart__cart' />
						</span>
					</div>
				</nav>

				<CartContainer isShow={isShow}>{productTargetMap}</CartContainer>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	);
}

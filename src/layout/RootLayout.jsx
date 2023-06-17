import '../assets/styles/main.scss';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

export default function RootLayout() {
	const [isShow, setIsShow] = useState(false);
	function handleShow() {
		setIsShow(!isShow);
	}

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
				{/* min-w-[20rem] min-h-[60rem] */}
				<div
					className={`${
						isShow ? 'cartActive' : 'cartInActive'
					}   bg-darkBlue text-white `}
				>
					<h1>Testing Cart Center</h1>
				</div>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	);
}

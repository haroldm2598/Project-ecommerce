import '../assets/styles/main.scss';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function RootLayout() {
	function handleClick() {
		console.log('Cart pop up!!!');
		return (
			<div className='w-80 h-3/5 bg-lightBlue absolute top-0 right-0'>
				asdfasdf
			</div>
		);
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
						<span className='navbarCart' onClick={handleClick}>
							<FaShoppingCart className='navbarCart__cart' />
						</span>
					</div>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	);
}

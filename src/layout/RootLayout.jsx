import '../assets/styles/main.scss';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
	return (
		<div className='rootLayout'>
			<header>
				<nav className='h-20 px-10 flex flex-wrap flex-row justify-between items-center font-bold border-b-4'>
					<h1 className='grow shrink text-4xl'>FakeStore</h1>
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
					<div className='grow shrink text-center navbarCart'>Cart</div>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

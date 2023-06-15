import '../assets/styles/main.scss';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
	return (
		<div className='rootLayout'>
			<header>
				<nav className='h-20 px-10 bg-amber-300 flex flex-wrap flex-row justify-between items-center font-bold'>
					<h1 className='grow text-4xl '>FakeStore</h1>
					<div className='grow shrink-0 basis-96'>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/Product' className='mx-10 '>
							Product
						</NavLink>
						<NavLink to='/Contact'>Contact</NavLink>
					</div>
					{/* className='grow shrink basis-auto' */}
					<div className='grow shrink basis-52'>Cart</div>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

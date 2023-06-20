import '../assets/styles/main.scss';
import { FaShoppingCart } from 'react-icons/fa';

export default function Card({ image, title, price, getProductTarget }) {
	return (
		<>
			<div className='card transition duration-200 ease-out hover:ease-in hover:scale-125'>
				<img
					src={image}
					alt='homepage image'
					className='w-full h-72 object-cover'
				/>
				{title && price && (
					<div className='p-2 h-36'>
						<h3 className='text-xl font-medium'>{title}</h3>
						<div className=' flex justify-between items-center'>
							<p>${price}</p>
							{getProductTarget && (
								<span
									className=' cursor-pointer'
									onClick={() => getProductTarget(image, title, price)}
								>
									<FaShoppingCart />
								</span>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
}

import '../assets/styles/main.scss';
import { FaShoppingCart } from 'react-icons/fa';

export default function Card({ image, title, price }) {
	return (
		<>
			<div className='w-80 h-auto'>
				<img
					src={image}
					alt='homepage image'
					className='w-full h-72 object-cover'
				/>
				<div>
					<h3 className='text-xl font-medium'>{title}</h3>
					<div className=' flex justify-between items-center'>
						<p>${price}</p>
						<span>
							<FaShoppingCart />
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

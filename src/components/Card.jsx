// import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import '../assets/styles/main.scss';

export default function Card({
	image,
	title,
	price,
	getProductTarget,
	isCount,
	currentCount,
	currentPrice,
	decrementPrice,
	IncrementPrice
}) {
	// const [currentCount, setCurrentCount] = useState(1);
	// const [currentPrice, setCurrentPrice] = useState(price);

	// function decrementPrice() {
	// 	setCurrentCount((oldCount) => {
	// 		if (oldCount <= 1) {
	// 			return (oldCount = 1);
	// 		} else {
	// 			return oldCount - 1;
	// 		}
	// 	});
	// 	setCurrentPrice((oldPrice) => {
	// 		return currentCount <= 1 ? oldPrice : oldPrice - price;
	// 	});
	// }

	// function IncrementPrice() {
	// 	setCurrentCount((oldCount) => oldCount + 1);
	// 	setCurrentPrice((oldPrice) => oldPrice + price);
	// }

	return (
		<>
			<div className='card transition duration-200 ease-out hover:ease-in hover:scale-110'>
				<img
					src={image}
					alt='homepage image'
					className='w-full h-96 object-cover object-top'
				/>
				{title && price && (
					<div className='p-4 h-36 flex flex-col'>
						<h3 className='flex-1 text-base font-medium'>{title}</h3>
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

							{isCount && (
								<>
									<button onClick={decrementPrice}>-</button>
									<h3>{currentCount}</h3>
									<button onClick={IncrementPrice}>+</button>
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
}

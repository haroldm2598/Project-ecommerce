import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import '../assets/styles/main.scss';

export default function Card({
	// productId,
	image,
	title,
	price,
	getProductTarget,
	isCount,
	getCurrentPrices
}) {
	const [currentCount, setCurrentCount] = useState(1);
	const [currentPrice, setCurrentPrice] = useState(price);

	function decrementPrice() {
		setCurrentCount((oldCount) => {
			if (oldCount <= 1) {
				return (oldCount = 1);
			} else {
				return oldCount - 1;
			}
		});
		setCurrentPrice((oldPrice) => {
			return currentCount <= 1 ? oldPrice : oldPrice - price;
		});
	}

	function IncrementPrice() {
		console.log(getCurrentPrices(currentPrice));
		setCurrentCount((oldCount) => oldCount + 1);
		setCurrentPrice((oldPrice) => oldPrice + price);
	}

	return (
		<>
			<div className='card transition duration-200 ease-out hover:ease-in hover:scale-110'>
				<img
					src={image}
					alt='homepage image'
					className='w-full h-96 object-cover object-top'
				/>
				{title && (
					<div className='p-4 h-36 flex flex-col'>
						<h3 className='flex-1 text-base font-medium'>{title}</h3>
						<div className=' flex justify-between items-center'>
							{/* {price ? <p>${price}</p> : <p>${currentPrice}</p>} */}
							<p>${currentPrice.toFixed(2)}</p>
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

// <>
// 	<button onClick={() => decrementPrice(productId)}>-</button>
// 	<h3>{quantity}</h3>
// 	<button onClick={() => IncrementPrice(productId)}>+</button>
// </>

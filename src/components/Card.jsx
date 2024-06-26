import { useState } from 'react';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';

import '../assets/styles/main.scss';

export default function Card(props) {
	const {
		productId,
		image,
		title,
		price,
		getProductTarget,
		isCount,
		getCurrentPrices,
		deleteCart
	} = props;

	const [currentCount, setCurrentCount] = useState(1);
	const [currentPrice, setCurrentPrice] = useState(price);

	const decrementPrice = () => {
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
		getCurrentPrices(
			currentCount <= 1 ? currentPrice : currentPrice - price,
			productId
		);
	};

	const IncrementPrice = () => {
		setCurrentCount((oldCount) => oldCount + 1);
		setCurrentPrice((oldPrice) => oldPrice + price);
		getCurrentPrices(currentPrice + price, productId);
	};

	return (
		<>
			<div className='card transition duration-200 ease-out hover:ease-in hover:scale-110'>
				<div className='w-full h-72'>
					<img
						src={image}
						alt='homepage image'
						className='w-full h-full object-contain'
						// w-full h-96 object-cover object-top without div
					/>
				</div>
				{title && (
					<div className='p-4 h-36 flex flex-col bg-semiDarkGray'>
						<h3 className='w-64 flex-1 text-black text-base font-medium'>
							{title}
						</h3>
						<div className='flex justify-between items-center'>
							<p className='text-black'>${currentPrice.toFixed(2)}</p>
							{getProductTarget && (
								<span
									className='cursor-pointer'
									onClick={() => getProductTarget(image, title, price)}
								>
									<FaShoppingCart />
								</span>
							)}

							{isCount && (
								<>
									<span
										className='cursor-pointer'
										onClick={(event) => deleteCart(event, productId)}
									>
										<FaTrash />
									</span>
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

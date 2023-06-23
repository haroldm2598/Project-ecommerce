import { useState } from 'react';
import '../assets/styles/main.scss';
import { FaShoppingCart } from 'react-icons/fa';

export default function Card({
	image,
	title,
	price,
	getProductTarget,
	currentCount,
	setCurrentCount
}) {
	const [currentPrice, setCurrentPrice] = useState(price);

	// function handlePrice() {
	// 	setCurrentPrice()
	// }
	console.log(currentPrice);

	return (
		<>
			<div className='card transition duration-200 ease-out hover:ease-in hover:scale-110'>
				<img
					src={image}
					alt='homepage image'
					className='cardImage w-full h-96'
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

							{currentCount && (
								<>
									<button
										onClick={() =>
											setCurrentCount((oldCount) => {
												if (oldCount <= 1) {
													return (oldCount = 1);
												} else {
													return oldCount - 1;
												}
											})
										}
									>
										-
									</button>
									<h3>{currentCount}</h3>
									<button
										onClick={() => setCurrentCount((oldCount) => oldCount + 1)}
									>
										+
									</button>
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
}

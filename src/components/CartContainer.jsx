import '../assets/styles/main.scss';
// import { useState } from 'react';
/*
   DONE - how can i pass the data coming from Product Page then to CartContainer
   DONE - Add increment and decrement button
   DONE - useState must use in button
   PROCESSING - move the logic baord of currentCount and currentPrice inside rootLayout
   PROCESSING (almost finish)- Array.reduce inorder to total the amount purchase
	- in order to achieve the handling event on total amount must insert the usestate in increment and decrement onClick 
    - make condition if already in the cart then remove the duplicate
	- remove item if accident or doesn't want the item
*/

function CartContainer({
	isShow,
	productTotalPrice,
	totalPrice,
	setTotalPrice,
	children
}) {
	function updateTotalAmount() {
		setTotalPrice(
			productTotalPrice.reduce(
				(accumulator, currentValue) => accumulator + currentValue,
				0
			)
		);
	}

	return (
		<div
			className={`${
				isShow ? 'cartActive' : 'cartInActive'
			} px-20 py-20 bg-white text-darkBlue flex flex-col gap-y-10`}
			onClick={updateTotalAmount}
		>
			{children.length === 0 ? (
				<h1>You cart is empty</h1>
			) : (
				<>
					<h1>Testing Cart Center</h1>
					{children}
					<div className='grid grid-cols-1 grid-rows-2'>
						<div className='flex justify-between'>
							<h3>Total Amount</h3>
							<h3>{totalPrice}</h3>
						</div>
						<button className='btn'>Checkout</button>
					</div>
				</>
			)}
		</div>
	);
}

export default CartContainer;

import '../assets/styles/main.scss';
// import { useState } from 'react';
/*
   DONE - how can i pass the data coming from Product Page then to CartContainer
   DONE - Add increment and decrement button
   DONE - useState must use in button
   
   NOT WORKING - move the logic baord of currentCount and currentPrice inside rootLayout
   NOT WORKING - add new conditional rendering where requesting if price is given then price Product(Card) else currentPrice for CartContainer(Card)  
   DONE - add maybe new object property of quantity and change it to state
   DONE - Array.reduce inorder to total the amount purchase
   PROCESSING - TotalPurchase problem encounter is when the default price is not add to the current one	
    - in order to achieve the handling event on total amount must insert the usestate in increment and decrement onClick 
    - make condition if already in the cart then remove the duplicate
	- remove item if accident or doesn't want the item
	
*/

function CartContainer({ isShow, totalPrice, children }) {
	// function updateTotalAmount() {
	// 	setTotalPrice(
	// 		productTotalPrice.reduce(
	// 			(accumulator, currentValue) => accumulator + currentValue,
	// 			0
	// 		)
	// 	);
	// }

	// testing for reducing price
	// does doing this inside the console log only works? what if in real rendering?
	const testing = totalPrice
		.map((item) => item.price)
		.reduce((acc, resultAmount) => {
			return acc + resultAmount;
		}, 0)
		.toFixed(2);

	return (
		<div
			className={`${
				isShow ? 'cartActive' : 'cartInActive'
			} px-20 py-20 bg-white text-darkBlue flex flex-col gap-y-10`}
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
							<h3>{testing}</h3>
						</div>
						<button className='btn'>Checkout</button>
					</div>
				</>
			)}
		</div>
	);
}

export default CartContainer;

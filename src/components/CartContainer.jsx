import '../assets/styles/main.scss';
// import { useState } from 'react';
/*
   DONE - how can i pass the data coming from Product Page then to CartContainer
   DONE - Add increment and decrement button
   DONE - useState must use in button
   PROCESSING - Array.reduce inorder to total the amount purchase
    - make condition if already in the cart then remove the duplicate
*/

function CartContainer({ isShow, totalPrice, children }) {
	// const [totalPrice, setTotalPrice] = useState(productTotalPrice);

	console.log(totalPrice);

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
							<h3>Price</h3>
						</div>
						<button className='btn'>Checkout</button>
					</div>
				</>
			)}
		</div>
	);
}

export default CartContainer;

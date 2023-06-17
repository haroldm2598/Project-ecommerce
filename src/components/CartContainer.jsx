import '../assets/styles/main.scss';
/*
    - how can i pass the data coming from Product Page then to CartContainer
    - Add increment and decrement button
    - useState must use in button
    - Array.reduce inorder to total the amount purchase
    - make condition if already in the cart then remove the duplicate
*/

function CartContainer({ isShow, children }) {
	return (
		<div
			className={`${
				isShow ? 'cartActive' : 'cartInActive'
			} px-20 py-10 bg-darkBlue text-white`}
		>
			<h1>Testing Cart Center</h1>
			{children}
		</div>
	);
}

export default CartContainer;

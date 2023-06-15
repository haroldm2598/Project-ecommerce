import { useState } from 'react';

// 'https://fakestoreapi.com/products?limit=4
export default function Home() {
	const [count, setCount] = useState(0);

	function decrement() {
		setCount((prevCount) => prevCount - 1);
	}

	function increment() {
		setCount((prevCount) => prevCount + 1);
	}
	const styles = {
		button:
			'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
	};

	return (
		<>
			<section>
				<h1>Welcome to Home page as default</h1>
				<h3>{count}</h3>
				<button className={`mx-5 ${styles.button}`} onClick={decrement}>
					Decrement
				</button>
				<button className={styles.button} onClick={increment}>
					Increment
				</button>
			</section>
		</>
	);
}

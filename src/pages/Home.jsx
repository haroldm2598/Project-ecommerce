import { useState } from 'react';

export default function Home() {
	const [count, setCount] = useState(0);

	function decrement() {
		setCount((prevCount) => prevCount - 1);
	}

	function increment() {
		setCount((prevCount) => prevCount + 1);
	}

	return (
		<>
			<section>
				<h1>Welcome to Home page as default</h1>
				<h3>{count}</h3>
				<button onClick={decrement}>Decrement</button>
				<button onClick={increment}>Increment</button>
			</section>
		</>
	);
}

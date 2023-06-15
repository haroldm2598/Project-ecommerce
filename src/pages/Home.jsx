import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/main.scss';
import homePageImg from '../assets/images/homepage.jpg';
// 'https://fakestoreapi.com/products?limit=4
export default function Home() {
	const [url, setUrl] = useState('https://fakestoreapi.com/products?limit=4');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url);
				console.log(response.data);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, [url]);

	return (
		<>
			<section className='h-screen px-10 py-14 bg-slate-500 homeContainer'>
				<div className='flex flex-row'>
					<div>
						<h1>An exclusive and unique brands</h1>
						<button>shop now</button>
					</div>
					<div className=' w-96'>
						<img src={homePageImg} alt='homepage image' />
					</div>
				</div>
			</section>
		</>
	);
}

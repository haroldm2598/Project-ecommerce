// import { useState, useEffect } from 'react';
// import axios from 'axios';
import '../assets/styles/main.scss';
import homePageImg from '../assets/images/homepage.jpg';

export default function Home() {
	// const [url, setUrl] = useState('https://fakestoreapi.com/products?limit=4');

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await axios.get(url);
	// 			console.log(response.data);
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	};

	// 	fetchData();
	// }, [url]);

	return (
		<>
			<section className='h-screen px-10 py-14 bg-slate-500 homeContainer'>
				<div className='flex flex-row justify-center items-center'>
					<div className='grow shrink basis-auto w-56 text-center'>
						<h1 className='mb-6 px-10 text-6xl font-semibold'>
							An exclusive and unique brands
						</h1>
						<button className='px-14 py-2 text-white rounded-md bg-redOrange hover:bg-redOrangeDark'>
							shop now
						</button>
					</div>
					<div className='grow shrink basis-auto w-72 h-96 bg-lightBlue rounded-2xl overflow-hidden object-cover'>
						<img
							src={homePageImg}
							alt='homepage image'
							className='object-cover'
						/>
					</div>
				</div>
			</section>
		</>
	);
}

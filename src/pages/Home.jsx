import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/main.scss';
import homePageImg from '../assets/images/homepage.jpg';
import Card from '../components/Card';

export default function Home() {
	const [url, setUrl] = useState('https://fakestoreapi.com/products?limit=4');
	const [fakeStoreData, setFakeStoreData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url);
				setFakeStoreData(response.data);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, [url]);

	const fakeStoreDataMap = fakeStoreData.map((item) => (
		<Card
			key={item.id}
			image={item.image}
			title={item.title}
			price={item.price}
		/>
	));

	return (
		<>
			<section className='h-auto px-10 py-14 bg-slate-500 homeContainer'>
				<div className='flex flex-row justify-center items-center'>
					<div className='grow shrink basis-auto w-56 text-center'>
						<h1 className='mb-6 px-10 text-6xl font-semibold'>
							An exclusive and unique brands
						</h1>
						<button className='px-20 py-2 bg-redOrange hover:bg-redOrangeDark text-white font-semibold rounded-md '>
							shop now
						</button>
					</div>
					<div className='grow shrink basis-auto w-64 h-96 mx-5 rounded-2xl overflow-hidden'>
						<img
							src={homePageImg}
							alt='homepage image'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>

				{/* 
				FEATURES SECTION 
				- set some useState
				- set new Map() for remove duplicates
				- image only
				- use component name it as Card
				
				*/}
				<div className='featureContainer mt-20'>
					<h1 className='text-4xl font-semibold'>Features</h1>
					<div className='my-10 flex  justify-center gap-10'>
						{fakeStoreDataMap}
					</div>
				</div>
			</section>
		</>
	);
}

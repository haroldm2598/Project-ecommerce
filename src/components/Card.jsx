import '../assets/styles/main.scss';

export default function Card({ image, title, price }) {
	return (
		<>
			<div className='w-80 h-auto'>
				<img
					src={image}
					alt='homepage image'
					className='w-full h-96 object-cover'
				/>
				<div className=' text-2xl font-medium'>
					<p>{title}</p>
					<p>${price}</p>
				</div>
			</div>
		</>
	);
}

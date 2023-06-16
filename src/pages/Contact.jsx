import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
	return (
		<>
			<section className='h-auto px-20 py-14 flex flex-row gap-4 bg-lightBlue text-white'>
				<div className='w-72 h-72 bg-darkBlue  grow shrink basis-auto'>
					{/* <img src='' alt='' /> */}
				</div>
				<div className='w-72 py-10 px-20 grow shrink basis-auto'>
					<h1 className='mb-4 text-2xl'>WHO WE ARE?</h1>
					<p className='text-lg'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fuga
						veniam explicabo ut quia ratione quasi iure rem debitis maiores odit
						magnam eum ipsam, aspernatur amet odio nemo reiciendis dolorem.
					</p>
				</div>
			</section>
			<section className='h-96 px-20 py-14 bg-lightGray grid justify-center'>
				<div className='flex flex-row justify-around items-center'>
					<FaGithub size={70} />
					<FaInstagram size={70} />
					<FaLinkedin size={70} />
				</div>
				<div className='text-2xl'>
					<p>3736 Briarhill Lane</p>
					<p>614-531-4419</p>
				</div>
			</section>
		</>
	);
}

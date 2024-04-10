import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import imgSrc from '../assets/images/about.jpg';

/*
 - Use unDraw.co raw sketch in order to maximize design
*/

export default function Contact() {
	return (
		<>
			<section className='h-auto px-2 py-10 flex flex-col gap-4 items-center bg-semiLightGray text-black md:flex-row sm:px-20 sm:py-14'>
				<div className='w-96 h-96 bg-darkBlue grow shrink basis-auto rounded-xl'>
					<img
						className='w-full h-full object-cover rounded-xl'
						src={imgSrc}
						alt='about image'
					/>
				</div>
				<div className='w-72 p-0 md:py-10 md:px-20 grow shrink basis-auto'>
					<h1 className='mb-4 text-2xl'>WHO WE ARE?</h1>
					<p className='text-lg'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fuga
						veniam explicabo ut quia ratione quasi iure rem debitis maiores odit
						magnam eum ipsam, aspernatur amet odio nemo reiciendis dolorem.
					</p>
				</div>
			</section>
			<section className='h-auto px-20 py-14 bg-semiDarkGray grid justify-center items-center'>
				<div className='flex flex-col items-center gap-20 sm:flex-row pb-5'>
					<FaGithub size={70} />
					<FaInstagram size={70} />
					<FaLinkedin size={70} />
				</div>
				<div className='mx-auto text-3xl font-semibold tracking-widest'>
					<p>3736 Briarhill Lane</p>
					<p>614-531-4419</p>
				</div>
			</section>
		</>
	);
}

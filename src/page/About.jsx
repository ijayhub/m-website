import Button from '../components/Button';
import authCover from '../assets/authCover.jpg';

const About = () => {
	return (
		<div className='  bg-purple-100 '>
			<section
				className='flex items-center my-8 max-w-7xl mx-auto p-5 '
				id='about'>
				<div className='w-4/6 hidden lg:block '>
					<img
						src={authCover}
						alt='A Busniess'
						className='rounded-2xl shadow-2xl hidden lg:block'
					/>
				</div>
				<div className='lg:ml-10 p-1 lg:p-5 leading-9 '>
					<p className='text-red-500 bg-yellow-200 text-center rounded-lg font-bold mb-3 text-lg lg:text-3xl p-2 logo'>
						About Diverse Havens
					</p>

					<p className='text-justify mb-3 max-w-3xl mx-auto '>
						Welcome to Diverse Havens, your ultimate destination for a diverse
						and inclusive shopping experience. At Diverse Havens, we are
						committed to celebrating diversity and embracing individuality by
						offering an extensive range of products to meet all your needs and
						desires. Our curated selection ensures that there is something for
						everyone. We prioritize inclusivity, quality, and affordability,
						delivering exceptional customer service and a seamless shopping
						experience.
					</p>
					<a href='#contact'>
						<div className='flex items-center justify-center'>
							<Button className='bg-black text-white p-1 rounded-lg w-[200px] ' value='Get in Touch' />
						</div>
					</a>
				</div>
			</section>
		</div>
	);
};

export default About;

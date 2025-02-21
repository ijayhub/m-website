import About from './About';
import Button from '../components/Button';
import Nav from '../components/Nav';
import Product from '../components/Product';
import Footer1 from '../components/Footer';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

const Home = () => {
	return (
		<>
			
			<Nav />
			<main className='Home'>
				<div className='home-container'>
					<h2 className='mb-2'>Welcome to Diverse Haven</h2>
					<p className='home-para'>
						Your Ultimate Destination for Everything You Need
					</p>
					<div className='flex justify-center items-center'>
						<Button
							type='button'
							value='Start Exploring'
							className='home-btn'
						/>
					</div>
				</div>
			</main>
			<About />
			<Product />
			<a href='#'>
				<div className='flex justify-end items-end sticky p-4 lg:p-8'>
					<BsFillArrowUpSquareFill className='text-yellow-400 text-2xl lg:text-3xl' />
				</div>
			</a>
			<Footer1 />
		</>
	);
};

export default Home;

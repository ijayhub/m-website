import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import Button from '../components/Button';
import Footer1 from '../components/Footer';
import Nav from '../components/Nav'
import Address from '../components/Address';

const Contact = () => {
	return (
		<>
			<Nav />
			<section className='grid md:grid-cols-2 items-center max-w-7xl mx-auto justify-between mt-12'>
				<div className='p-5'>
					<h3 className='lg:text-4xl text-pink-500 hover:text-purple-700 font-bold mb-5 text-center text-2xl'>
						Get in touch
					</h3>
					<p className='text-justify leading-8'>
						Feel free to contact us with any questions or concerns. We are here
						to help.
					</p>
				</div>
				<form
					action='https://usebasin.com/f/cf135965099d?redirect=http://localhost:5173/home'
					method='POST'
					className='p-5'>
					<h3 className='text-purple-700  font-bold text-center text-2xl lg:text-4xl'>
						Contact Form
					</h3>
					<div className='my-5 '>
						<label htmlFor='name' className='label'>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							className='w-full p-2 rounded-md bg-pink-100 border-none outline-none'
							placeholder='Andrew guy'
						/>
					</div>
					<div className='mb-5'>
						<label htmlFor='email' className='label'>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							className='w-full p-2 rounded-md bg-pink-100 border-none outline-none'
							placeholder='andrew@gmail.com'
						/>
					</div>
					<div className='mb-5'>
						<label htmlFor='message' className='label'>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							cols='30'
							rows='10'
							className='w-full resize-none rounded-md bg-pink-100 p-2 border-none outline-none'
							placeholder='Your message...'></textarea>
					</div>
					<div className='flex justify-end'>
						<Button
							value='Submit Form'
							className='font-bold bg-purple-500 p-2 text-white hover:bg-pink-500 rounded-xl'
						/>
					</div>
				</form>
			</section>
			<Address/>
			<a href='#'>
				<div className='flex justify-end items-end sticky p-4 lg:p-8'>
					<BsFillArrowUpSquareFill className='text-yellow-400 text-2xl lg:text-3xl' />
				</div>
			</a>
			<Footer1 />
		</>
	);
};

export default Contact;

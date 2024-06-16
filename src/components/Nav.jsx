import { useState } from 'react';
import { FiMenu } from "react-icons/fi";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  function Modal() {
    setOpen(!open);
  }

  return (
		<header className='bg-pink-200'>
			<div className='flex justify-between items-center shadow-xl xl:max-7xl xl:mx-auto py-5 px-[8%] w-full flex-wrap'>
				<a href='/'>
					<h1 className='logo'>D-Havens</h1>
				</a>
				<FiMenu
					className='lg:hidden block cursor-pointer h-6 w-6'
					onClick={Modal}
				/>
				<nav
					className={`lg:flex lg:items-center lg:w-auto w-full ${
						open ? 'block' : 'hidden'
					}`}>
					<ul className='lg:flex lg:justify-between items-center'>
						<li className='list'>
							<a href='/home'>Home</a>
						</li>
						<li className='list'>
							<a href='#about'>About Us</a>
						</li>
					
						<li className='list'>
							<a href='#product'>Product</a>
						</li>

						<li className='list'>
							<a href='/contact'>Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

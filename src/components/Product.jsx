import { useState } from 'react';
import { data } from '../../product'
import Button from '../components/Button'


const Product = () => {
	const [products]=useState(data)
  return (
		<>
			<section className=' p-8' id="product">
				<h2 className='text-center font-bold text-lg lg:text-4xl text-pink-500'>
					Sample of Products
				</h2>
				<div className='grid md:grid-cols-3 gap-4 lg:p-6'>
					{products.map((product) => (
						<div key={product.id} className='max-w-2xl mx-auto rounded-2xl shadow-2xl p-6'>
							<img
								src={product.img}
								alt='product'
								className='w-72 h-64'
							/>
							<Button
								value={product.btn}
								className='bg-green-400 p-2 rounded-2xl font-bold text-white'
							/>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Product;

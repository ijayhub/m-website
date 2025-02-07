import { useState } from "react";
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const data = [
	{
		id: 1,
		title: 'Address',
		description: 'Tradefair complex',
		icon: <FaMapMarkerAlt />,
	},
	{
		id: 2,
		title: 'Phone',
		description: '123456789',
		icon: <FaPhoneAlt />,
	},
	{
		id: 3,
		title: 'Email Address',
		description: 'c@gmail.com',
		icon: <FaEnvelopeOpen />,
	},
];

const Address = () => {
  const [contacts]=useState(data)
  return (
		<section className="max-w-7xl mx-auto my-16">
			<div className='grid grid-cols-1 md:grid-cols-3 text-center gap-7 mt-4 mx-3 lg:mx-0'>
				{contacts.map((contact) => (
					<div key={contact.id}>
						<div className='justify-center items-center p-4 rounded-md shadow-xl border-4 border-t-pink-400'>
							{contact.icon}
							<h4 className='text-purple-600 font-bold'>{contact.title}</h4>
							<p>{contact.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Address

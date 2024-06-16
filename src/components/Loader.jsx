import { useState,useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import Home from "../page/Home";


const Loader = () => {
  const [loader, setLoader] = useState(true);
	

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoader(false);
		}, 2000); // Adjust the delay as needed

		return () => clearTimeout(timer);
	}, []);
  return (
		<>
			<main className='bg-pink-100'>
				{loader && (
					<div className='flex flex-col pt-54 justify-center items-center h-screen '>
						<InfinitySpin
							visible={true}
							width='200'
							color='purple'
							ariaLabel='infinity-spin-loading'
						/>

						<div className='text-center'>
							<p className='text-4xl font-bold'>Loading</p>
							<small className="text-lg ">Please wait...</small>
						</div>
					</div>
				)}
			</main>
			<div>{!loader && <Home />}</div>
		</>
	);
}

export default Loader

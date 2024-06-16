import Loader from './components/Loader';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Loader />} />
				<Route path='/home' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
};

export default App;

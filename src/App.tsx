import './global.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';

type Props = {};

const App = (props: Props) => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login/*' element={<Login />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;

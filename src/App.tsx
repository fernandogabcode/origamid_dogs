import './global.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';

import { UserStorage } from './context/UserContext';

type Props = {};

const App = (props: Props) => {
	return (
		<>
			<UserStorage>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login/*' element={<Login />} />
				</Routes>
				<Footer />
			</UserStorage>
		</>
	);
};

export default App;

import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

type Props = {};

const Login: React.FC = (props: Props): ReactElement => {
	return (
		<Routes>
			<Route path='/' element={<LoginForm />} />
			<Route path='/criar' element={<LoginCreate />} />
			<Route path='/perdeu' element={<LoginPasswordLost />} />
			<Route path='/resetar' element={<LoginPasswordReset />} />
		</Routes>
	);
};

export default Login;

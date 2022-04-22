import s from './styles.module.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Brand } from '../../assets/icons/dogs.svg';
import { ReactElement, useContext } from 'react';

import { UserContext } from '../../context/UserContext';

const Header: React.FC = (): ReactElement => {
	// const user = useContext(UserContext);

	return (
		<header className={s['header']}>
			<div className={`${s['content']} container`}>
				<Link to='/' aria-label='Dogs - Home'>
					<Brand />
				</Link>
				<nav>
					<Link to='/login' className={s['login']}>
						Login
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;

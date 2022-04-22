import s from './styles.module.scss';

type Props = {
	disabled?: boolean;
	children: any;
	args?: any;
};

const Button = ({ children, ...args }: Props) => {
	return (
		<button className={s['button']} {...args}>
			{children}
		</button>
	);
};

export default Button;

import React from 'react';
import s from './styles.module.scss';

type InputProps = {
	label?: string;
	type: string;
	name: string;
	value?: string;
	error?: string | null;
	setValue?: React.Dispatch<React.SetStateAction<string>>;
	onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
	label,
	type,
	name,
	value,
	setValue,
	onChange,
	onBlur,
	error,
}: InputProps) => {
	return (
		<div className={s['wrapper']}>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				id={name}
				className={s['input']}
				onChange={onChange}
				value={value}
				onBlur={onBlur}
			/>
			{/* Verifica se existe error */}
			{error && <p className={s['error']}>{error}</p>}
		</div>
	);
};

export default Input;

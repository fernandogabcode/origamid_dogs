import React, { FormEvent, ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import useForm from '../../../hooks/useForm';

import { TOKEN_POST, USER_GET } from '../../../api';

const LoginForm: React.FC = (): ReactElement => {
	const username = useForm();
	const password = useForm();
	// console.log(username);

	const getUser = async (token: string): Promise<void> => {
		const { url, options } = USER_GET(token);
		const response = await fetch(url, options);
		const json = await response.json();
	};

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Verifica se os campos estão preenchidos antes de enviar o form
		if (username.validate() && password.validate()) {
			const { url, options } = TOKEN_POST({
				username: username.value,
				password: password.value,
			});

			// Envia uma requisição do tipo POST ao submeter o formulário
			const response = await fetch(url, options);
			const json = await response.json();
			// console.log(json);

			// Insere os dados no localstorage
			localStorage.setItem('token', json.token);

			// Envia o token para a função getUser
			getUser(json.token);
		}
	};

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			getUser(token);
		}
	}, []);

	return (
		<section>
			<h2>Login Form</h2>
			<form onSubmit={handleSubmit}>
				<Input label='Usuário' type='text' name='username' {...username} />
				<Input label='Senha' type='password' name='password' {...password} />
				<Button>Enviar</Button>
			</form>
		</section>
	);
};

export default LoginForm;

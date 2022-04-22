import React, { FormEvent, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import useForm from '../../../hooks/useForm';

const LoginForm: React.FC = (): ReactElement => {
	const username = useForm();
	const password = useForm();
	// console.log(username);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Verifica se os campos estão preenchidos antes de enviar o form
		if (username.validate() && password.validate()) {
			// Envia uma requisição do tipo POST ao submeter o formulário
			fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},

				// JSON.stringify = transforma o objeto em sring
				body: JSON.stringify({}),
			})
				.then((response) => {
					console.log(response);
					return response.json();
				})
				.then((json) => {
					console.log(json);
				});
		}
	};

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

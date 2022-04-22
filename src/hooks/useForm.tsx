import { useState } from 'react';

const types: any = {
	email: {
		regex:
			/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
		message: 'E-mail inválido',
	},
};

const useForm = (type?: string | boolean) => {
	const [value, setValue] = useState<string>('');
	const [error, setError] = useState<string | null>(null);

	const validate = (value: any) => {
		// Não valida o campo
		if (type === false) return true;

		// Caso não preencher o input do form
		if (value.length === 0) {
			setError('Preencha um valor.');
			return false;
			// Verifica se foi inserido o tipo
		} else if (type === 'email' && !types.email.regex.test(value)) {
			setError(types.email.message);
			return false;
		} else {
			setError(null);
			return true;
		}
	};

	const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		if (error) validate(target.value);
		setValue(target.value);
	};

	return {
		// Exporta como um método já validando o campo
		validate: () => validate(value),
		onBlur: () => validate(value),
		setValue,
		onChange,
		value,
		error,
	};
};

export default useForm;

export const API_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = (body: {
	username: string;
	password: string;
}): any => {
	return {
		url: `${API_URL}/jwt-auth/v1/token`,
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},

			// JSON.stringify = transforma o objeto em sring
			body: JSON.stringify(body),
		},
	};
};

export const USER_GET = (token: string) => {
	return {
		url: `${API_URL}/jwt-auth/v1/token`,
		options: {
			method: 'GET',
			headers: {
				Authorization: `Bearer + ${token}`,
			},
		},
	};
};

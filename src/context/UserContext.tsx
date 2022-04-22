import { createContext, SetStateAction, Dispatch, useState } from 'react';

export const UserContext = createContext<string | null>(null);

type Props = {
	children: React.ReactNode;
};

// type Context = {
// 	usuario: string;
// 	setContext: Dispatch<SetStateAction<Context>>;
// };

// const initialState: Context = {
// 	usuario: 'Fernando',
// 	setContext: (): void => {},
// };

// Envolve todos os elementos que acessa no contexto
export const UserStorage = ({ children }: Props): JSX.Element => {
	// const [contextState, setContextState] = useState<Context>(initialState);
	return <UserContext.Provider>{children}</UserContext.Provider>;
};

import { Dispatch, FC, createContext, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import { AuthAction, AuthActionType, AuthState } from './authTypes';
import { authReducer } from './authReducer';

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: '',
  userId: '',
  error: null,
};

export const AuthContext = createContext<{
  authState: AuthState;
  dispatch: Dispatch<AuthAction>;
}>({ authState: initialState, dispatch: () => null });

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const router = useRouter();

  useEffect(() => {
    dispatch({ type: AuthActionType.CHECK_TOKEN });
  }, []);

  // useEffect(() => {
  //   if (authState.isAuthenticated) {
  //     router.replace('/test');
  //   }
  // }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export interface User {
  _id?: string;
  email: string;
  password: string;
  username?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
  userId: string;
  error: string | null;
}

export enum AuthActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  CHECK_TOKEN = 'CHECK_TOKEN',
}

export interface LoginAction {
  type: AuthActionType.LOGIN;
  payload: loginResponse;
}

export interface LogoutAction {
  type: AuthActionType.LOGOUT;
}

export interface CheckTokenAction {
  type: AuthActionType.CHECK_TOKEN;
}

export type AuthAction = LoginAction | LogoutAction | CheckTokenAction;

export interface loginResponse {
  accessToken: string;
  userId: string;
}

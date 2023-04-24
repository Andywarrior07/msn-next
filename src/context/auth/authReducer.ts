import { AuthAction, AuthActionType, AuthState } from './authTypes';

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('userId', action.payload.userId);

      return {
        ...state,
        accessToken: action.payload.accessToken,
        userId: action.payload.userId,
        isAuthenticated: true,
        error: null,
      };
    case AuthActionType.LOGOUT:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userId');

      return {
        ...state,
        isAuthenticated: false,
        accessToken: '',
        userId: '',
        error: null,
      };

    case AuthActionType.CHECK_TOKEN:
      const accessToken = localStorage.getItem('accessToken');
      const userId = localStorage.getItem('userId');

      if (!accessToken || !userId) {
        return {
          ...state,
          isAuthenticated: false,
          accessToken: '',
          userId: '',
          error: null,
        };
      }

      return {
        ...state,
        accessToken,
        userId,
        isAuthenticated: true,
        error: null,
      };

    default:
      return state;
  }
};

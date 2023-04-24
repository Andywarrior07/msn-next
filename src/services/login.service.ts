import axios from 'axios';
import { User, loginResponse } from '@/context/auth/authTypes';

const API_URL = 'http://localhost:3000/api';

export const login = async (user: User): Promise<loginResponse> => {
  const { data } = await axios.post<loginResponse>(
    `${API_URL}/iam/sign-in`,
    user,
  );

  return data;
};

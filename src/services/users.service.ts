import { User } from '@/context/auth/authTypes';
import { axiosInstance } from '@/utils/axios';

const API_URL = 'http://localhost:3000/api';

export const getFriends = async (): Promise<User[]> => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('token required');
  }

  try {
    const { data } = await axiosInstance(accessToken).get<User[]>(
      `${API_URL}/users/friends`,
    );

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

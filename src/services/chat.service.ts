import { Message } from '@/context/chat/chatTypes';
import { axiosInstance } from '@/utils/axios';

const API_URL = 'http://localhost:3000/api';

export const getMessages = async (
  to: string,
  from: string,
): Promise<Message[]> => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('token required');
  }

  try {
    const { data } = await axiosInstance(accessToken).get<Message[]>(
      `${API_URL}/chat/messages?to=${to}&from=${from}`,
    );

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

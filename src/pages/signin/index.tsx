import React, { ChangeEvent, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/auth/AuthContext';
import { AuthActionType, User } from '@/context/auth/authTypes';
import { login } from '@/services/login.service';

export default function Signin() {
  const { dispatch } = useContext(AuthContext);
  const [user, setUser] = useState<User>({
    email: '',
    password: 'qweqweqweqwe',
  });
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const data = await login(user);
      dispatch({ type: AuthActionType.LOGIN, payload: data });
      router.replace('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

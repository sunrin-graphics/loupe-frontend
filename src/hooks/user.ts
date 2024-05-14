import { useQuery } from 'react-query';
import { Work } from './work';

export interface User {
  uuid?: string;
  name: string;
  email: string;
  avatar?: string;
  instagram?: string;
  portfolio?: string;
  made: Made[];
}

export interface Made {
  uuid: string;
  user: User;
  work: Work;
  main: boolean;
}

export function useUsers() {
  return useQuery<User[]>('users', async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  });
}

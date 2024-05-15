import { useQuery } from 'react-query';
import { Made } from './user';

export enum WorkType {
  'Illustration' = 'Illustration',
  'UI/UX' = 'UIUX',
  'VideoGraphy' = 'VideoGraphy',
  '3D Design' = '3D Design',
  'Photography' = 'Photography',
  'Graphic Design' = 'Graphic Design',
}

export interface Work {
  uuid?: string;
  title: string;
  description: string;
  thumbnail: string;
  artwork: string[];
  youtubeUrl?: string;
  type: WorkType;
  made: Made[];
}

export function useWorks(search?: WorkType) {
  return useQuery<Work[]>(['works', search], async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/work?search=${search ?? ''}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return res.json();
  });
}

export function useWork(id: string) {
  return useQuery<Work>(['work', id], async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/work/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.json();
  });
}

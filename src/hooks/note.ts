import { useMutation, useQuery, useQueryClient } from 'react-query';

export interface Note {
  id?: string;
  message: string;
  author: string;
}

export function useNotes() {
  return useQuery<Note[]>('notes', async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/note`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return (await response.json()) as Note[];
  });
}

export function usePostNote() {
  const queryClient = useQueryClient();

  return useMutation(
    (note: Note) => {
      return fetch(`${import.meta.env.VITE_API_URL}/note`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('notes');
      },
    },
  );
}

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
    async (note: Note) => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/note`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.message) {
          switch (errorData.message) {
            case 'Bad word':
              throw new Error('※ 비속어를 사용하지 말아주세요');
            default:
              throw new Error('에러가 발생하였습니다.');
          }
        }
        throw new Error('An error occurred while posting the note');
      }

      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('notes');
      },
    },
  );
}

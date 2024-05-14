import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
  children: React.ReactNode;
}
export default function QueryProvider({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

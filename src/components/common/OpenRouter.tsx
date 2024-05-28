import useIsOpenStore from '@/store/isOpen';
import { Navigate, Outlet } from 'react-router-dom';

export default function OpenRouter() {
  const isOpen = useIsOpenStore((state) => state.isOpen);

  if (!isOpen) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

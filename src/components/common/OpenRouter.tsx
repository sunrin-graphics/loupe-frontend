import useIsOpenStore from '@/store/isOpen';
import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export default function OpenRouter() {
  const isOpen = useIsOpenStore((state) => state.isOpen);
  const load = useIsOpenStore((state) => state.load);

  useEffect(() => {
    if (load && !isOpen) {
      return <Navigate to="/" />;
    }
  }, [load]);

  return <Outlet />;
}

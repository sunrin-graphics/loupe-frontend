import useIsOpenStore from '@/store/isOpen';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function OpenRouter() {
  const isOpen = useIsOpenStore((state) => state.isOpen);
  const load = useIsOpenStore((state) => state.load);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (load && !isOpen) {
  //     return <Navigate to="/" />;
  //   }
  // }, [load]);

  useEffect(() => {
    if (load && !isOpen) return navigate('/');
  }, [load]);

  return <Outlet />;
}

import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import useIsOpenStore from '@/store/isOpen';

const OPEN_DATE = DateTime.fromISO('2024-05-29T13:00:00');

interface Props {
  children: React.ReactNode;
}
export default function OpenProvider({ children }: Props) {
  const setIsOpen = useIsOpenStore((state) => state.setIsOpen);

  const [time, setTime] = useState(0);

  const now = DateTime.now().setZone('Asia/Seoul');

  function handle() {
    const diff = OPEN_DATE.diff(now, ['days', 'hours', 'minutes', 'seconds']);
    if (diff.as('seconds') < 0) return setIsOpen(true);
    setTime(diff.as('seconds'));
  }

  useEffect(() => {
    handle();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      handle();
    }, 1000);
  }, [time]);

  return <>{children}</>;
}

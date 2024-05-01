import styled from 'styled-components';
import { motion } from 'framer-motion';

interface GuestbookCardProps {
  from: string;
  to: string;
  content: string;
}

export default function GuestbookCard({
  from,
  to,
  content,
}: GuestbookCardProps) {
  const imgAnimation = {
    show: {
      y: [40, 0],
      opacity: [0, 1],
      scale: [0.98, 1],
    },
    hide: {
      y: [0, 40],
      opacity: [1, 0],
      scale: [1, 0.98],
    },
  };
  return (
    <GuestbookCardLayout variants={imgAnimation}>
      <GuestbookCardTop>To. {to}</GuestbookCardTop>
      <GuestbookContent>{content}</GuestbookContent>
      <From>From. {from}</From>
    </GuestbookCardLayout>
  );
}

const GuestbookCardLayout = styled(motion.div)`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--700, #f8f8fc);
`;

const GuestbookCardTop = styled.div`
  color: var(--100, #181826);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;

const GuestbookContent = styled.div`
  color: var(--300, #59596f);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const From = styled.div`
  color: var(--200, #302f4b);
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  align-self: flex-end;
`;

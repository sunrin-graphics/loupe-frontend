import styled from 'styled-components';
import { motion } from 'framer-motion';

interface GuestbookCardProps {
  from: string;
  content: string;
}

export default function GuestbookCard({ from, content }: GuestbookCardProps) {
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
    overflow: hidden; 
    max-width: 100%; 
`;

const GuestbookContent = styled.div`
    
  color: var(--300, #302f4b);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
    word-wrap: break-word; 
    word-break: break-all; 
    overflow-wrap: break-word; 
`;

const From = styled.div`
  color: var(--200, #878797);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  align-self: flex-end;
`;

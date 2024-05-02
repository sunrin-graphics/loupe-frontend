import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ArtworkProps {
  title: string;
  owner: string;
  onClick?: () => void;
}

export default function Artwork({ title, owner, onClick }: ArtworkProps) {
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
    <Layout onClick={onClick} variants={imgAnimation}>
      <ArtImage src="thumbnail.png" />
      <ArtInfo>
        <ArtTitle>{title}</ArtTitle>
        <ArtOwner>{owner}</ArtOwner>
      </ArtInfo>
    </Layout>
  );
}

const Layout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    transition: transform 0.2s ease-in-out;
  }
`;

const ArtTitle = styled.div`
  color: var(--100, #181826);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;

const ArtOwner = styled.div`
  color: var(--400, #878797);
  font-family: SUITE;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
`;

const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const ArtImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

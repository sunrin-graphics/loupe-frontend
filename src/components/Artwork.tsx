import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProgressiveImg from './ProgressiveImg';

interface ArtworkProps {
  title: string;
  owner: string;
  thumbnail: string;
  onClick?: () => void;
}

export default function Artwork({
  title,
  owner,
  thumbnail,
  onClick,
}: ArtworkProps) {
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
      <ArtImage
        placeholderSrc={`${import.meta.env.VITE_API_URL}/file/${thumbnail.split('/')[0]}/low.png`}
        src={
          thumbnail
            ? `${import.meta.env.VITE_API_URL}/file/${thumbnail.split('/')[0]}/middle.png`
            : 'thumbnail.png'
        }
        alt={'이미지'}
      />
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
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const ArtImage = styled(ProgressiveImg)`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 4px;
  background-color: #D9D9D9;
`;

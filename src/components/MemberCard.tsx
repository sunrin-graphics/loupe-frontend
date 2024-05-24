import { ReactComponent as InstagramIcon } from '../assets/instagramSmall.svg';
import { ReactComponent as LinkIcon } from '../assets/linkSmall.svg';
import { ReactComponent as ArtIcon } from '../assets/art.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProgressiveImg from './ProgressiveImg';

interface MemberCardProps {
  name: string;
  mail: string;
  avatar?: string;
  insLink?: string;
  poLink?: string;
  artLink?: string;
}

const MemberCard = ({
  name,
  mail,
  avatar,
  insLink = '',
  poLink = '',
  // artLink = '',
}: MemberCardProps) => {
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
    <MemberCardLayout variants={imgAnimation}>
      <MemberCardImg
        placeholderSrc={
          avatar
            ? `${import.meta.env.VITE_API_URL}/file/${avatar.split('/')[0]}/low.png`
            : 'author.png'
        }
        src={
          avatar
            ? `${import.meta.env.VITE_API_URL}/file/${avatar.split('/')[0]}/256.png`
            : 'author.png'
        }
        loading="lazy"
        alt={'이미지'}
      />
      <div>
        <MemberCardName>{name}</MemberCardName>
        <MemberCardMailAddress>{mail}</MemberCardMailAddress>
      </div>
      <CardLinkItem
        target="_blank"
        to={`https://instagram.com/${insLink}`}
        $disabled={!insLink}
      >
        <CardLinkIcon>
          <InstagramIcon />
        </CardLinkIcon>
        <CardLinkTitle>인스타그램</CardLinkTitle>
      </CardLinkItem>

      <CardLinkItem target="_blank" to={poLink} $disabled={!poLink}>
        <CardLinkIcon>
          <LinkIcon />
        </CardLinkIcon>
        <CardLinkTitle>포트폴리오</CardLinkTitle>
      </CardLinkItem>

      <CardLinkItem to={``} $disabled={true}>
        <CardLinkIcon>
          <ArtIcon />
        </CardLinkIcon>
        <CardLinkTitle>대표 작품보기</CardLinkTitle>
      </CardLinkItem>
    </MemberCardLayout>
  );
};

const MemberCardLayout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const MemberCardImg = styled(ProgressiveImg)`
  width: 56px;
  height: 56px;
  border-radius: 56px;
`;

const MemberCardName = styled.div`
  color: var(--100, #181826);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;

const MemberCardMailAddress = styled.div`
  color: var(--100, #181826);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;

const CardLinkItem = styled(Link)<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;

  ${({ $disabled }) => $disabled && 'pointer-events: none;'}

  p {
    color: ${(props) => (props.$disabled ? '#BBBBC4' : '#59596F')};
  }

  svg {
    fill: ${(props) => (props.$disabled ? '#BBBBC4' : '#59596F')};
  }
`;

const CardLinkTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  color: ${(props) => props.color || 'red'};
  text-decoration: none;
`;
const CardLinkIcon = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

export default MemberCard;

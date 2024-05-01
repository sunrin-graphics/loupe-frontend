import InstagramIcon from '../assets/instagramSmall.svg?react';
import LinkIcon from '../assets/linkSmall.svg?react';
import ArtIcon from '../assets/art.svg?react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MemberCard = ({name, mail, insLink, poLink, artLink}) => {
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
      <MemberCardImg src={'author.png'} alt={'이미지'} />
      <div>
        <MemberCardName>{name}</MemberCardName>
        <MemberCardMailaddress>{mail}</MemberCardMailaddress>
      </div>
      <CardLinkItem href={insLink}>
        <CardLinkIcon>
          <InstagramIcon />
        </CardLinkIcon>
        <CardLinkTitle color={'#59596F'}>인스타그램</CardLinkTitle>
      </CardLinkItem>
      <CardLinkItem href={poLink}>
        <CardLinkIcon>
          <LinkIcon />
        </CardLinkIcon>
        <CardLinkTitle color={'#BBBBC4'}>포트폴리오</CardLinkTitle>
      </CardLinkItem>
      <CardLinkItem href={artLink}>
        <CardLinkIcon>
          <ArtIcon />
        </CardLinkIcon>
        <CardLinkTitle color={'#BBBBC4'}>대표 작품보기</CardLinkTitle>
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

const MemberCardImg = styled.img`
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

const MemberCardMailaddress = styled.div`
    color: var(--100, #181826);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
`;

const CardLinkItem = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
`;

const CardLinkTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
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

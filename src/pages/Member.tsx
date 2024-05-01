import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

import InstagramIcon from '../assets/instagramSmall.svg?react';
import LinkIcon from '../assets/linkSmall.svg?react';
import ArtIcon from '../assets/art.svg?react';


export default function Member(/*이름, 사진, 링크3개*/) {
  return (
    <Layout>
      <Header />
      <Section>
        <MemberTitleContainer>참여 인원</MemberTitleContainer>
        <MemberCardContainer>
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </MemberCardContainer>
      </Section>
      <Footer />
    </Layout>
  );
}
const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Section = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    @media (max-width: 1920px) {
        padding: 80px 160px;
    }
    @media (max-width: 1440px) {
        padding: 32px;
    }
    @media (max-width: 744px) {
        padding: 20px;
    }
`;

const MemberTitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    //justify-content: flex-end;
    align-items: flex-start;
    color: var(--100, #181826);
    font-style: normal;
    font-weight: 600;
    @media (max-width: 1920px) {
        font-size: 56px;
        line-height: 80px;
        padding: 128px 0px 16px 0px;
    }
    @media (max-width: 1440px) {
        font-size: 48px;
        line-height: 64px;
        padding: 96px 0px 16px 0px;
    }
    @media (max-width: 744px) {
        font-size: 32px;
        line-height: 48px;
        padding: 64px 20px 16px 20px;
    }
`;

const MemberCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
    flex-direction: column;
    width: 100%;
    padding: 24px 0px;
    align-items: flex-start;
    gap: 16px;
    @media (max-width: 744px) {
        grid-template-columns: 1fr 1fr 1fr;
        padding: 24px 20px;
    }
    @media (max-width: 720px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 483px) {
        grid-template-columns: 1fr;
    }
`;

const MemberCard = () => {
  return (
    <MemberCardLayout>
      <MemberCardImg src={'author.png'} alt={'이미지'} />
      <div>
        <MemberCardName>박시원</MemberCardName>
        <MemberCardMailaddress>whoisapple@kakao.com</MemberCardMailaddress>
      </div>
      <CardLinkItem>
        <CardLinkIcon><InstagramIcon /></CardLinkIcon>
        <CardLinkTitle color={'#59596F'}>인스타그램</CardLinkTitle>
      </CardLinkItem>
      <CardLinkItem>
        <CardLinkIcon>
          <LinkIcon />
        </CardLinkIcon>
        <CardLinkTitle color={'#BBBBC4'}>포트폴리오</CardLinkTitle>
      </CardLinkItem>
      <CardLinkItem>
        <CardLinkIcon>
          <ArtIcon />
        </CardLinkIcon>
        <CardLinkTitle color={'#BBBBC4'}>대표 작품보기</CardLinkTitle>
      </CardLinkItem>
    </MemberCardLayout>
  );
};

const MemberCardLayout = styled.div`
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

const CardLinkItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
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
`;
const CardLinkIcon = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
`;
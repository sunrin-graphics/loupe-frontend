import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MemberCard from '../components/MemberCard';
import { motion } from 'framer-motion';
import { Section } from '../components/shared/styles';

export default function Member() {
  const gridAnimation = {
    show: {
      transition: { staggerChildren: 0.1 },
    },
    hide: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  return (
    <Layout>
      <Header />
      <Section>
        <MemberTitleContainer>참여 인원</MemberTitleContainer>
        <MemberCardContainer
          variants={gridAnimation}
          animate="show"
          exit="hide"
        >
          <MemberCard
            name={'박시원'}
            mail={'whoisapple@kakao.com'}
            insLink={'http://www.digital-media.kr/degreeshow/2022/'}
            poLink={'http://www.digital-media.kr/degreeshow/2022/'}
            artLink={'http://www.digital-media.kr/degreeshow/2022/'}
          />
          <MemberCard
            name={'박시원'}
            mail={'whoisapple@kakao.com'}
            insLink={'http://www.digital-media.kr/degreeshow/2022/'}
            poLink={'http://www.digital-media.kr/degreeshow/2022/'}
            artLink={'http://www.digital-media.kr/degreeshow/2022/'}
          />
          <MemberCard
            name={'박시원'}
            mail={'whoisapple@kakao.com'}
            insLink={'http://www.digital-media.kr/degreeshow/2022/'}
            poLink={'http://www.digital-media.kr/degreeshow/2022/'}
            artLink={'http://www.digital-media.kr/degreeshow/2022/'}
          />
          <MemberCard
            name={'박시원'}
            mail={'whoisapple@kakao.com'}
            insLink={'http://www.digital-media.kr/degreeshow/2022/'}
            poLink={'http://www.digital-media.kr/degreeshow/2022/'}
            artLink={'http://www.digital-media.kr/degreeshow/2022/'}
          />
          <MemberCard
            name={'박시원'}
            mail={'whoisapple@kakao.com'}
            insLink={'http://www.digital-media.kr/degreeshow/2022/'}
            poLink={'http://www.digital-media.kr/degreeshow/2022/'}
            artLink={'http://www.digital-media.kr/degreeshow/2022/'}
          />
          <MemberCard
            name={'박시원'}
            mail={'whoisapple@kakao.com'}
            insLink={'http://www.digital-media.kr/degreeshow/2022/'}
            poLink={'http://www.digital-media.kr/degreeshow/2022/'}
            artLink={'http://www.digital-media.kr/degreeshow/2022/'}
          />
          <MemberCard
            name={'박시원'}
            mail={'whoisapple@kakao.com'}
            insLink={'http://www.digital-media.kr/degreeshow/2022/'}
            poLink={'http://www.digital-media.kr/degreeshow/2022/'}
            artLink={'http://www.digital-media.kr/degreeshow/2022/'}
          />
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

const MemberTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  align-items: flex-start;
  color: var(--100, #181826);
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 80px;
  padding: 128px 0px 16px 0px;

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

const MemberCardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  flex-direction: column;
  width: 100%;
  padding: 24px 0px;
  align-items: flex-start;
  gap: 48px 16px;
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

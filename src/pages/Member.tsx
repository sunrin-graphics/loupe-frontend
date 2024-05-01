import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MemberCard from '../components/MemberCard';
import { motion } from 'framer-motion';
import {
  PageLayout,
  PageTitle,
  Section,
  SectionTop,
} from '../components/shared/styles';

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
    <PageLayout>
      <Header />
      <Section>
        <SectionTop>
          <PageTitle>참여 인원</PageTitle>
        </SectionTop>
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
    </PageLayout>
  );
}

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

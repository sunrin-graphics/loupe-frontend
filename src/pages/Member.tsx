import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '@/components/common/Header';
import MemberCard from '@/components/MemberCard';
import { motion } from 'framer-motion';
import {
  PageLayout,
  PageTitle,
  Section,
  SectionTop,
} from '@/components/shared/Styles';

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
      <Header scroll={{ y: 50 }} />
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
  grid-template-columns: repeat(auto-fill, minmax(267px, 1fr));
  flex-direction: column;
  width: 100%;
  padding: 24px 0px;
  align-items: flex-start;
  gap: 48px 16px;
  @media (max-width: 774px) {
    padding: 24px 24px;
  }
`;
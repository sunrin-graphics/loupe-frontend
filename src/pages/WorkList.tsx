import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Artwork from '../components/Artwork';
import { motion } from 'framer-motion';
import { Section } from '../components/shared/styles';

export default function WorkList() {
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
        <SectionTop>
          <PageTitle>UI/UX</PageTitle>
        </SectionTop>
        <Gallery variants={gridAnimation} animate="show" exit="hide">
          <Artwork
            title="라온 - 어플리케이션 기반 반자유여행 서비스"
            owner="박시원"
          />
          <Artwork
            title="LOUPE - 세상을 보는 창구"
            owner="박시원, 박정우, 오지후"
          />
          <Artwork title="너울" owner="박시원, 박정우" />
          <Artwork title="Artwork 1" owner="박시원" />
          <Artwork title="Artwork 1" owner="박시원" />
          <Artwork title="Artwork 1" owner="박시원" />
          <Artwork title="Artwork 1" owner="박시원" />
        </Gallery>
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

const SectionTop = styled.div`
  width: 100%;
  display: flex;
  padding: 128px 0px 16px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const PageTitle = styled.div`
  color: var(--100, #181826);
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 80px; /* 142.857% */
`;

const Gallery = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 32px 16px;
  align-self: stretch;
  flex-wrap: wrap;
`;

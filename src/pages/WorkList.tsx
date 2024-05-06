import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import styled from 'styled-components';
import Artwork from '@/components/Artwork';
import { motion } from 'framer-motion';
import {
  PageLayout,
  PageTitle,
  Section,
  SectionTop,
} from '../components/shared/Styles';
import { useNavigate } from 'react-router-dom';
import TitlePagination from '@/components/work/TitlePagination';
import { useState } from 'react';

const dummy = ['3D Design', 'Graphic Design', 'Photography'];

export default function WorkList() {
  const navigate = useNavigate();

  const [_, setTitle] = useState(dummy[0]);

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
          <TitlePagination state={[_, setTitle]} title={dummy} />
          {/* <PageTitle>UI/UX</PageTitle> */}
        </SectionTop>
        <Gallery variants={gridAnimation} animate="show" exit="hide">
          <Artwork
            onClick={() => navigate('/work')}
            title="라온 - 어플리케이션 기반 반자유여행 서비스"
            owner="박시원"
          />
          <Artwork
            onClick={() => navigate('/work')}
            title="LOUPE - 세상을 보는 창구"
            owner="박시원, 박정우, 오지후"
          />
          <Artwork
            onClick={() => navigate('/work')}
            title="너울"
            owner="박시원, 박정우"
          />
          <Artwork
            onClick={() => navigate('/work')}
            title="Artwork 1"
            owner="박시원"
          />
          <Artwork
            onClick={() => navigate('/work')}
            title="Artwork 1"
            owner="박시원"
          />
          <Artwork
            onClick={() => navigate('/work')}
            title="Artwork 1"
            owner="박시원"
          />
          <Artwork
            onClick={() => navigate('/work')}
            title="Artwork 1"
            owner="박시원"
          />
        </Gallery>
      </Section>
      <Footer />
    </PageLayout>
  );
}

const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(267px, 1fr));
  gap: 32px 16px;
  padding: 24px 0;
`;

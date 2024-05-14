import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import styled from 'styled-components';
import Artwork from '@/components/Artwork';
import { motion } from 'framer-motion';
import { PageLayout, Section, SectionTop } from '../components/shared/Styles';
import { useNavigate } from 'react-router-dom';
import TitlePagination from '@/components/work/TitlePagination';
import { useState } from 'react';
import { WorkType, useWorks } from '@/hooks/work';

const dummy = [
  'All',
  'Illustration',
  'UI/UX',
  'VideoGraphy',
  '3D Design',
  'Photography',
];

export default function WorkList() {
  const navigate = useNavigate();

  const [title, setTitle] = useState(dummy[0]);

  const { data: works } = useWorks(
    title === 'ALL' ? undefined : WorkType[title as keyof typeof WorkType],
  );

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
        <SectionTopV2>
          <TitlePagination state={[title, setTitle]} title={dummy} />
        </SectionTopV2>
        <Gallery variants={gridAnimation} animate="show" exit="hide">
          {works?.map((work) => (
            <Artwork
              key={work.uuid}
              onClick={() => navigate(`/work/${work.uuid}`)}
              title={work.title}
              owner={work.made?.map((m) => m?.user?.name).join(', ')}
              thumbnail={work.thumbnail}
            />
          ))}
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

const SectionTopV2 = styled(SectionTop)`
  @media (max-width: 744px) {
    padding: 64px 0px 16px 0px;
  }
`;

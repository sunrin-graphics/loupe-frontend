import styled from 'styled-components';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import PlusIcon from '@/assets/plus.svg';
import GuestbookCard from '@/components/GuestbookCard';
import { useState } from 'react';
import PostGuestbookModal from '@/components/modal/PostGuestbookModal';
import { motion } from 'framer-motion';
import {
  PageLayout,
  PageTitle,
  Section,
  SectionTop,
} from '@/components/shared/Styles';
import { useNotes } from '@/hooks/note';
export default function Guestbook() {
  const { data: notes } = useNotes();

  const [modalOpen, setModalOpen] = useState(false);

  const gridAnimation = {
    show: {
      transition: { staggerChildren: 0.1 },
    },
    hide: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const columnAnimation = {
    show: {
      transition: { staggerChildren: 0.1 },
    },
    hide: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  return (
    <PageLayout>
      {modalOpen && (
        <PostGuestbookModal open={modalOpen} setOpen={setModalOpen} />
      )}
      <Header scroll={{ y: 50 }} />
      <Section>
        <SectionTop>
          <PageTitle>방명록</PageTitle>
          <PageCTAButton onClick={() => setModalOpen(!modalOpen)}>
            <img src={PlusIcon} />
            작성하기
          </PageCTAButton>
        </SectionTop>
        <Gallery variants={gridAnimation} animate="show" exit="hide">
          <GuestbookColumn variants={columnAnimation}>
            {notes?.map((note) => (
              <GuestbookCard
                key={note.id}
                from={note.author}
                content={note.message}
              />
            ))}
          </GuestbookColumn>
        </Gallery>
      </Section>
      <Footer />
    </PageLayout>
  );
}

const PageCTAButton = styled.button`
  display: flex;
  padding: 12px 20px 12px 16px;
  align-items: center;
  gap: 4px;
  border-radius: 100px;
  background: var(--100, #181826);
  color: var(--800, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  border: none;
  line-height: 150%; /* 27px */
  transition:
    background 0.2s,
    transform 0.2s;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
    background: var(--200, #302f4b);
  }
`;

const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(267px, 1fr));
  gap: 16px;
`;

const GuestbookColumn = styled(motion.div)`
  display: flex;
  padding: 24px 0px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
`;

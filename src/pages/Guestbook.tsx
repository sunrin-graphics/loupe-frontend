import styled from 'styled-components';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import PlusIcon from '@/assets/plus.svg';
import GuestbookCard from '@/components/GuestbookCard';
import { useEffect, useState } from 'react';
import PostGuestbookModal from '@/components/modal/PostGuestbookModal';
import { motion } from 'framer-motion';
import {
  PageLayout,
  PageTitle,
  Section,
  SectionTop,
} from '@/components/shared/Styles';
import { Note, useNotes } from '@/hooks/note';
export default function Guestbook() {
  const { data: notes } = useNotes();
  const [modalOpen, setModalOpen] = useState(false);
  const [noteChunks, setNoteChunks] = useState<Note[][]>([]);
  const [windowSize, setWindowSize] = useState<number>(
    document.documentElement.clientWidth,
  );

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
  const chunkArray = (array: Note[], windowsize: number): Note[][] => {
    let arrayamount = 4;
    if (windowsize < 590) arrayamount = 1;
    else if (windowsize < 909) arrayamount = 2;
    else if (windowsize <= 1300) arrayamount = 3;
    else arrayamount = 4;
    const chunks: Note[][] = Array.from({ length: arrayamount }, () => []);
    let arrayindex = 0;
    for (let i = 0; i < array.length; i += 1) {
      chunks[arrayindex].push(array[i]);
      arrayindex = (arrayindex + 1) % arrayamount;
    }
    return chunks;
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(document.documentElement.clientWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setNoteChunks(chunkArray(notes || [], windowSize));
  }, [notes, windowSize]);

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
          {noteChunks.map((chunk) => (
            <GuestbookColumn variants={columnAnimation}>
              {chunk.map((note) => (
                <GuestbookCard from={note.author} content={note.message} />
              ))}
            </GuestbookColumn>
          ))}
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
  width: 100%;
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

import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PlusIcon from '../assets/plus.svg';
import GuestbookCard from '../components/GuestbookCard';
import { useState } from 'react';
import PostGuestbookModal from '../components/modal/PostGuestbookModal';
export default function Guestbook() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Layout>
      {modalOpen && (
        <PostGuestbookModal open={modalOpen} setOpen={setModalOpen} />
      )}
      <Header />
      <Section>
        <SectionTop>
          <PageTitle>방명록</PageTitle>
          <PageCTAButton onClick={() => setModalOpen(!modalOpen)}>
            <img src={PlusIcon} />
            작성하기
          </PageCTAButton>
        </SectionTop>
        <Gallery>
          <GuestbookColumn>
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? "
              to="박시원"
            />
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업"
              to="박시원"
            />
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업"
              to="박시원"
            />
          </GuestbookColumn>
          <GuestbookColumn>
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업"
              to="박시원"
            />
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? "
              to="박시원"
            />
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업"
              to="박시원"
            />
            <GuestbookCard from="박시원" content="안녕하세요!" to="박시원" />
          </GuestbookColumn>
          <GuestbookColumn>
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? "
              to="박시원"
            />
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업"
              to="박시원"
            />
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업"
              to="박시원"
            />
          </GuestbookColumn>
          <GuestbookColumn>
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업"
              to="박시원"
            />
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? "
              to="박시원"
            />
            <GuestbookCard
              from="박시원"
              content="너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업한다고? 왜? 어떻게? 너가 졸업"
              to="박시원"
            />
            <GuestbookCard from="박시원" content="안녕하세요!" to="박시원" />
          </GuestbookColumn>
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

const Section = styled.div`
  display: flex;
  width: 100%;
  padding: 0 240px;
  margin-top: 60px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  @media (max-width: 1920px) {
    padding: 0 160px;
  }
  @media (max-width: 1440px) {
    padding: 0 32px;
  }
  @media (max-width: 744px) {
    padding: 0 20px;
  }
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
  &:hover {
    background: var(--200, #302f4b);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const GuestbookColumn = styled.div`
  display: flex;
  padding: 24px 0px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
`;

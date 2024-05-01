import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Artwork from '../components/Artwork';

export default function WorkList() {
  return (
    <Layout>
      <Header />
      <Section>
        <SectionTop>
          <PageTitle>UI/UX</PageTitle>
        </SectionTop>
        <Gallery>
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

const Gallery = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 32px 16px;
  align-self: stretch;
  flex-wrap: wrap;
`;

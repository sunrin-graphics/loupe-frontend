import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Member() {
  return (
    <Layout>
      <Header />
      <Section>
        <MemberTitleContainer>참여 인원</MemberTitleContainer>
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
    position: relative;
    width: 100%;
    height: 100vh;
    @media (max-width: 1920px) {
        padding: 80px 160px;
    }
    @media (max-width: 1440px) {
        padding: 32px;
    }
    @media (max-width: 744px) {
        padding: 20px;
    }
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
    @media (max-width: 1920px) {
        font-size: 56px;
        line-height: 80px;
        padding: 128px 0px 16px 0px;
    }
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

// const MemberCardContainer = styled.div``



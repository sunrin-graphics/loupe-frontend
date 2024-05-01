import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Member() {
  return (
    <Layout>
      <Header />
      <Section />
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
`;

import styled from 'styled-components';
import Footer from '../components/Footer';
import WorkTop from '../components/WorkTop';
import WorkMain from '../components/WorkMain';
import HeaderScroll from '../components/HeaderScroll';

function Work() {
  return (
    <Layout>
      <HeaderScroll />
      <WorkTop />
      <WorkMain />
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

export default Work;

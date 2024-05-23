import styled from 'styled-components';
import ThreeBackground from '@/components/main/ThreeBackground.tsx';
import MainBackground from '@/components/main/MainBackground.tsx';
import Header from '../components/common/Header.tsx';
import Introduce from '@/components/main/Introduce.tsx';
import IntroduceArt from '@/components/main/IntroduceArt.tsx';
import TravelGraph from '@/components/main/TravelGraph.tsx';
import Available from '@/components/main/Available.tsx';
import Footer from '@/components/common/Footer.tsx';

export default function Main() {
  return (
    <MainLayout>
      <Header transparent />
      <ThreeBackground />
      <MainBackground />
      <Introduce />
      <TravelGraph />
      <IntroduceArt />
      <Available />
      <Footer />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  position: relative;
  width: 100%;
  /* background-image: url('/overlay.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x; */
`;

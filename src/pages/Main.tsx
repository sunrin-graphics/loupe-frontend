import styled from 'styled-components';
import ThreeBackground from '@/components/main/ThreeBackground.tsx';
import MainBackground from '@/components/main/MainBackground.tsx';
import Header from '../components/common/Header.tsx';
import Introduce from '@/components/main/Introduce.tsx';
import TravelGraph from '@/components/main/TravelGraph.tsx';

export default function Main() {
  return (
    <MainLayout>
      <Header transparent />
      {/* <ThreeBackground /> */}
      <MainBackground />
      <Introduce />
      <TravelGraph/>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  background-color: #2e2053;
  position: relative;
  width: 100%;
    /* background-image: url('/overlay.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x; */
`;

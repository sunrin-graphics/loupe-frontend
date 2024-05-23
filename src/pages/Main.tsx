import styled from 'styled-components';
import ThreeBackground from '@/components/main/ThreeBackground.tsx';
import MainBackground from '@/components/main/MainBackground.tsx';
import Header from '../components/common/Header.tsx';
import Introduce from '@/components/main/Introduce.tsx';
import TravelGraph from '@/components/main/TravelGraph.tsx';
import Available from '@/components/main/Available.tsx';

export default function Main() {
  return (
    <MainLayout>
      <Header transparent />
      {/* <ThreeBackground /> */}
      <MainBackground />
      <Introduce />
      <TravelGraph />

      <ContentLayout>
        <Available />
      </ContentLayout>
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

const ContentLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;

  padding: 48px 160px;
`;

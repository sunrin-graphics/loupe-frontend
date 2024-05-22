import styled from 'styled-components';
// import ThreeBackground from '@/components/main/ThreeBackground.tsx';
import MainBackground from '@/components/main/MainBackground.tsx';
import Header from '../components/common/Header.tsx';
// import MainBackgroundMap from '@/components/main/MainBackgroundMap.tsx';

export default function Main() {
  return (
    <MainLayout>
      <Header transparent />
      {/* <ThreeBackground /> */}
      <MainBackground />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  background-color: #2e2053;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url('/overlay.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x;
`;

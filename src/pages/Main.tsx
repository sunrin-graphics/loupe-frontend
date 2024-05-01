import styled from 'styled-components';
import ThreeBackground from '../components/ThreeBackground';
import MainBackground from '../components/MainBackground';
import MainBackgroundSphere from '../components/MainBackgroundSphere';

export default function Main() {
  return (
    <MainLayout>
      <ThreeBackground/>
      <MainBackground/>
      <MainBackgroundSphere/>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  background-color:#2E2053;
  position:relative;
  width:100%;
  height:100vh;
`



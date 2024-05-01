import styled from 'styled-components';
import ThreeBackground from '../components/ThreeBackground';
import MainBackground from '../components/MainBackground';
import HeaderTransparent from '../components/HeaderTransparent';

export default function Main() {
  return (
    <MainLayout>
      <HeaderTransparent />
      <ThreeBackground />
      <MainBackground />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  background-color: #2e2053;
  position: relative;
  width: 100%;
  height: 100vh;
`;

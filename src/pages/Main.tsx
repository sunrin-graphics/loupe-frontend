import styled from 'styled-components';
import ThreeBackground from '../components/ThreeBackground';
import MainBackground from '../components/MainBackground';
import Header from '../components/Header.tsx';

export default function Main() {
  return (
    <MainLayout>
      <Header transparent />
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

import styled from 'styled-components';
import ThreeBackground from '@/components/main/ThreeBackground.tsx';
import MainBackground from '@/components/main/MainBackground.tsx';
import Header from '../components/common/Header.tsx';

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

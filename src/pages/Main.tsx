import styled from 'styled-components';
import ThreeBackground from '../components/ThreeBackground';
import MainBackground from '../components/MainBackground';

export default function Main() {
  return (
    <MainLayout>
      <ThreeBackground/>
      <MainBackground/>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  background-color:#2E2053;
  position:relative;
  width:100%;
  height:100vh;
`



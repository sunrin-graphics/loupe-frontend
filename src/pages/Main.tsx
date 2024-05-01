import styled from 'styled-components';
import ThreeBackground from '../components/ThreeBackground';
import MainBackground from '../components/MainBackground';

export default function Main() {
  return (
    <MainLayout>
      <ThreeBackground/>
    </MainLayout>
  );
}

const MainLayout = styled.div`
  position:relative;
  width:100%;
  height:100vh;
`



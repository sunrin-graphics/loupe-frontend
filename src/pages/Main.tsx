import styled from 'styled-components';
import ThreeBackground from '@/components/main/ThreeBackground.tsx';
import MainBackground from '@/components/main/MainBackground.tsx';
import Header from '../components/common/Header.tsx';
import Introduce from '@/components/main/Introduce.tsx';
import IntroduceArt from '@/components/main/IntroduceArt.tsx';
import TravelGraph from '@/components/main/TravelGraph.tsx';
import Available from '@/components/main/Available.tsx';
import Footer from '@/components/common/Footer.tsx';
import { useEffect, useRef, useState } from 'react';

export default function Main() {
  const whiteRef = useRef<HTMLDivElement>(null);
  const [headerTransparent, setHeaderTransparent] = useState(false);

  // 특정 ref 가 보이는 스크롤부터 상태 변경
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderTransparent(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -100% 0px',
      },
    );

    if (whiteRef.current) {
      observer.observe(whiteRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <MainLayout>
      <Header transparent={headerTransparent} />
      <ThreeBackground />
      <MainBackground />
      <Introduce />
      <WhiteSection ref={whiteRef}>
        <TravelGraph />
        <IntroduceArt />
        <Available />
      </WhiteSection>
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

const WhiteSection = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

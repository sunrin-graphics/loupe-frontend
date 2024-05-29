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
import useIsOpenStore from '@/store/isOpen.ts';
import VideoSection from '@/components/main/VideoSection.tsx';

export default function Main() {
  const whiteRef = useRef<HTMLDivElement>(null);
  const [headerTransparent, setHeaderTransparent] = useState(false);
  const isOpen = useIsOpenStore((state) => state.isOpen);

  const [scrollY, setScrollY] = useState(0);

  // 특정 ref 가 보이는 스크롤부터 상태 변경
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!whiteRef.current) return;

    if (scrollY + 60 < whiteRef.current.offsetTop) {
      setHeaderTransparent(true);
    } else {
      setHeaderTransparent(false);
    }
  }, [scrollY]);

  return (
    <MainLayout>
      <Header transparent={headerTransparent} />
      <ThreeBackground />
      <MainBackground />
      <Introduce />
      <TravelGraph />
      <WhiteSection ref={whiteRef}>
        <IntroduceArt />
        {isOpen ? <VideoSection /> : <Available />}
      </WhiteSection>
      <Footer />
    </MainLayout>
  );
}

const MainLayout = styled.div`
  position: relative;
  width: 100%;
`;

const WhiteSection = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

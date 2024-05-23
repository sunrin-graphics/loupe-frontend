import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { ReactComponent as ArrowBottomIcon } from '@/assets/arrowbottom.svg';
import MainTitle from './MainTitle';
import { useEffect, useState } from 'react';

export default function MainBackground() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const blockHeight = 800; // 스크롤을 막을 길이

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrollY(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY <= blockHeight) {
      const progress = scrollY / blockHeight;
      controls.start({
        opacity: Math.max(0, 1 - progress * 1.3),
      });
    }
  }, [scrollY, controls, blockHeight]);

  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 0.5,
        duration: 1.5,
      },
    },
  };

  const MapFloatAnimation = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: {
        y: {
          yoyo: Infinity,
          duration: 1.3,
          type: 'spring',
        },
      },
    },
  };

  return (
    <MainLayout>
      <MainLayoutContent>
        <Title initial="hidden" animate="visible" variants={titleAnimation}>
          제13회 선린인터넷고등학교 콘텐츠디자인과 졸업전시회
        </Title>
        <FloatContainer>
          <div>
            <MainTitle />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={MapFloatAnimation}
          >
            <motion.img
              initial={{ opacity: 1, scale: 1.2 }}
              animate={controls}
              style={{
                zIndex: 9,
                width: '100%',
                margin: '0 auto',
              }}
              src="/map.png"
              alt=""
            />
          </motion.div>
        </FloatContainer>
      </MainLayoutContent>
      <BottomContent
        style={{
          background: `linear-gradient(180deg, rgba(42, 29, 76, 0) 0%, rgb(42, 29, 76, ${(() => {
            const progress = scrollY / blockHeight;
            return Math.max(0, 1 - progress * 1.3);
          })()}) 100%)`,
        }}
      >
        <BottomLabel>아래로 스크롤해보세요!</BottomLabel>
        <ArrowBottomIcon />
      </BottomContent>
    </MainLayout>
  );
}

const FloatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(24px);
  }
  100% {
    transform: translateY(0);
  }
`;

const FloatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1260px;
  flex: 1;
  animation: ${FloatingAnimation} 4s infinite 2s;
`;

const BottomLabel = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;

const BottomContent = styled.div`
  z-index: 1;
  display: flex;
  width: 100%;
  padding: 32px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: absolute;
  bottom: 0;
`;

const MainLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh; /* 100vh를 추가하여 화면 전체를 채움 */
  overflow: hidden; /* 스크롤이 자연스럽게 보이지 않도록 함 */
`;
const MainLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 128px;
  gap: 32px;
  width: 100%;
`;

const Title = styled(motion.div)`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`;

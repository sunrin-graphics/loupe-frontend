import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { ReactComponent as ArrowBottomIcon } from '@/assets/arrowbottom.svg';
import MainTitle from './MainTitle';
import { ReactComponent as CinematicImg } from '@/assets/cinematic.svg';
import { ReactComponent as InstagramImg } from '@/assets/instagramBig.svg';
import { useEffect, useState } from 'react';
import map from '@/assets/images/map.webp';

export default function MainBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);
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
      setProgress(Math.max(0, 1 - progress * 1.3));
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
          제12회 선린인터넷고등학교 콘텐츠디자인과 졸업전시회
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
            <img
              style={{
                zIndex: 9,
                width: '100%',
                margin: '0 auto',
                borderRadius: '50%',
                boxShadow: '0px -20.059px 23.294px 0px rgba(0, 0, 0, 0.15)',
                scale: '1.2',
                opacity: progress,
              }}
              src={map}
              alt="루페 아트워크"
            />
          </motion.div>
        </FloatContainer>
      </MainLayoutContent>
      <BottomContainer
        style={{
          background: `linear-gradient(180deg, rgba(42, 29, 76, 0) 0%,#2e2053 100%)`,
        }}
      >
        <ButtonGroup>
          <button disabled>
            <CinematicImg />
            <p>공식 티저</p>
          </button>

          <a href="https://instagram.com/sr_design_exhibit" target="_blank">
            <InstagramImg />
            <p>공식 인스타그램</p>
          </a>
        </ButtonGroup>
        <BottomContent>
          <BottomLabel>아래로 스크롤해보세요!</BottomLabel>
          <ArrowBottomIcon />
        </BottomContent>
      </BottomContainer>
    </MainLayout>
  );
}

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    path {
      fill: var(--800, #fff);
    }
    width: 24px;
    height: 24px;
    @media (max-width: 1300px) {
      width: 20px;
      height: 20px;
    }
  }

  a {
    display: flex;
    padding: 12px 20px 12px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    border: 1.5px solid rgba(255, 255, 255, 0.4); // var(--600, #ececf1
    background: rgba(255, 255, 255, 0.05);
    transition:
      background 0.2s,
      transform 0.2s;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    &:active {
      transform: scale(0.95);
      background: rgba(255, 255, 255, 0.4);
    }
    p {
      color: var(--800, #fff);
      font-size: 18px;
      font-weight: 600;
      line-height: 150%; /* 27px */
      @media (max-width: 1300px) {
        font-size: 16px;
      }
      @media (max-width: 744px) {
        font-size: 14px;
      }
    }
  }
  button[disabled] {
    svg {
      path {
        fill: var(--800, #ffffff89);
      }
      width: 24px;
      height: 24px;
      @media (max-width: 1300px) {
        width: 20px;
        height: 20px;
      }
    }
    display: flex;
    padding: 12px 20px 12px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    border: 1.5px solid rgba(255, 255, 255, 0.4); // var(--600, #ececf1
    background: rgba(255, 255, 255, 0.05);
    user-select: none;
    p {
      color: var(--800, #ffffff89);
      font-size: 18px;
      font-weight: 600;
      line-height: 150%; /* 27px */
      @media (max-width: 1300px) {
        font-size: 16px;
      }
      @media (max-width: 744px) {
        font-size: 14px;
      }
    }
  }
`;

const FloatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
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
  @media (max-width: 1300px) {
    padding: 0 70px;
  }
  @media (max-width: 744px) {
    padding: 80px;
  }
`;

const BottomContainer = styled.div`
  z-index: 100;
  display: flex;
  width: 100%;
  padding: 120px 0 32px 0;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const MainLayout = styled.div`
  background-color: #2e2053;
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
  @media (max-width: 1300px) {
    font-size: 18px;
  }
  @media (max-width: 744px) {
    font-size: 16px;
  }
`;

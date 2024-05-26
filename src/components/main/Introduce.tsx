import styled from 'styled-components';
import { ResponsiveContainer } from '../shared/Styles';
import { useEffect, useState, useRef } from 'react';
import blendCircle from '@/assets/images/blendcircle.webp';
import loupeCircle from '@/assets/images/loupecircle.webp';
import blend from '@/assets/images/blend.webp';
import defaultImage from '@/assets/images/default.webp';

export default function Introduce() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [deg, setDeg] = useState(0);

  const [screenWidth, setScreenWidth] = useState(window.outerWidth);
  useEffect(() => {
    setScreenWidth(window.outerWidth);
  }, [screenWidth]);

  const boxRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const flip = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateY(${deg + 180}deg)`;
      setDeg((prev) => prev + 180);
    }
  };

  return (
    <Layout>
      <Wrapper>
        <MainTextContainer>
          <TitleContainer>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <SubTitle data-aos="fade-up">LOUPE의 의미</SubTitle>
              <MainTitle data-aos="fade-up">
                다른 세상을 볼 수 있는 창
              </MainTitle>
            </div>
            <Description data-aos="fade-up">
              루페는 하나의 확대도구로, 작은 무언가를 볼 수 있게 도와주는
              도구에요. 가까이 있던 무언가가 루페를 통해 본다면 다른 모습으로
              보이듯이, 이번 졸업전시회의 루페는 정형적인 시각의 틀에서 벗어나
              다른 무언가를 볼 수 있게 도와주는 창이라는 뜻을 담았어요.
            </Description>
          </TitleContainer>
        </MainTextContainer>
        <MainContentContainer data-aos="flip-left">
          <ContentMobileName>이미지를 눌러보세요!</ContentMobileName>
          <ContentBox ref={boxRef} onMouseMove={handleMouseMove}>
            <img src={defaultImage} alt="loupe" />
            <img
              src={blend}
              alt="blendimage"
              style={{
                clipPath: `circle(100px at ${mousePosition.x}px ${mousePosition.y}px)`,
              }}
            />
          </ContentBox>
          <CardBox onClick={flip} ref={cardRef}>
            <Card src={loupeCircle} />
            <CardBack src={blendCircle} className="back" />
          </CardBox>
          <ContentName>현재의 루페 ↔ 처음 스케치 버전 루페</ContentName>
        </MainContentContainer>
      </Wrapper>
    </Layout>
  );
}

const Card = styled.img`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  backface-visibility: hidden;
  border-radius: 12px;
  transition: transform 0.8s;
  background-position: center;
  background-size: cover;
`;

const CardBack = styled(Card)`
  transform: rotateY(180deg);
`;

const CardBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;

  transform-style: preserve-3d;
  border-radius: 12px;
  @media (min-width: 744px) {
    display: none;
  }
`;

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2e2053;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x;
`;

const Wrapper = styled(ResponsiveContainer)`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  gap: 48px;
`;
const MainTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 48px;
  @media (max-width: 1133px) {
    margin-top: 32px;
  }
  @media (max-width: 375px) {
    margin-top: 16px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const SubTitle = styled.div`
  color: var(--800, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 744px) {
    font-size: 18px;
  }
`;

const MainTitle = styled.div`
  color: var(--800, #fff);
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 84px */
  font-size: 56px;
  @media (max-width: 1300px) {
    font-size: 48px;
  }
  @media (max-width: 744px) {
    font-size: 32px;
  }
`;

const Description = styled.div`
  color: var(--500, #bbbbc4);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  max-width: 748px;
  width: 100%;
  font-size: 20px;
  line-height: 150%; /* 30px */
  @media (max-width: 1300px) {
    font-size: 18px;
  }
  @media (max-width: 744px) {
    font-size: 16px;
  }
`;
const MainContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;
`;
const ContentBox = styled.div`
  max-width: 930px;
  width: 100%;
  height: 522px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: none;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 744px) {
    display: none;
  }
`;

const ContentName = styled.div`
  position: relative;
  bottom: 0;
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  margin-top: 20px;
  @media (max-width: 744px) {
    display: none;
  }
`;

const ContentMobileName = styled.div`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  @media (min-width: 744px) {
    display: none;
  }
`;

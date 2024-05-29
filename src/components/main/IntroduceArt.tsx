import styled, { keyframes } from 'styled-components';
import { ResponsiveContainer } from '@/components/shared/Styles.tsx';
import Palette from '@/assets/palette.svg';
import { useEffect, useState } from 'react';
import { useWorks } from '@/hooks/work.ts';

const IntroduceRef = () => {
  const { data: works } = useWorks(undefined);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <ResponsiveContainer>
        <Wrapper>
          <WrapperTop>
            <Subtitle>기나 긴 여정동안 발견했던,</Subtitle>
            <Title>
              또 다른 세상들을 <br />
              보여주고자 해요.
            </Title>
          </WrapperTop>
          <Button>
            <TextBox>
              <PaletteImg alt="팔레트 아이콘" src={Palette} />
              <ButtonText>작품 보러 가기</ButtonText>
            </TextBox>
          </Button>
        </Wrapper>
      </ResponsiveContainer>
      <WorkList scrollPosition={scrollPosition - 400}>
        {works?.map((work) => (
          <Worklistcontent>
            <WorkImage
              alt="작품 이미지"
              src={`${import.meta.env.VITE_API_URL}/file/${work.thumbnail.split('/')[0]}/low.png`}
            />
          </Worklistcontent>
        ))}
      </WorkList>
      <WorkListleft scrollPosition={scrollPosition}>
        {works?.map((work) => (
          <Worklistcontent>
            <WorkImage
              alt="작품 이미지"
              src={`${import.meta.env.VITE_API_URL}/file/${work.thumbnail.split('/')[0]}/low.png`}
            />
          </Worklistcontent>
        ))}
      </WorkListleft>
      <WorkList scrollPosition={scrollPosition + 6460}>
        {works?.map((work) => (
          <Worklistcontent>
            <WorkImage
              alt="작품 이미지"
              src={`${import.meta.env.VITE_API_URL}/file/${work.thumbnail.split('/')[0]}/low.png`}
            />
          </Worklistcontent>
        ))}
      </WorkList>
    </Layout>
  );
};

export default IntroduceRef;

const RotateAnimation = keyframes`
    100% {
        transform: rotate(1turn);
    }
`;

const PaletteImg = styled.img`
  z-index: 1;
  width: 24px;
  height: 24px;
  @media screen and (max-width: 744px) {
    width: 20px;
    height: 20px;
  }
`;
const Layout = styled.div`
    min-height: 1280px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140dvh;
  background-color: #ffffff;
  position: relative;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin-top: 120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 32px;
  @media (max-width: 1300px) {
    font-size: 128px;
  }
  @media (max-width: 744px) {
    font-size: 64px;
  }
`;

interface WorkListProps {
  scrollPosition: number;
}

const WorkList = styled.div<WorkListProps>`
  display: flex;
  padding: 32px 0px;
  flex-direction: low;
  align-items: flex-start;
  gap: 12px;
  transform: ${({ scrollPosition }) =>
    `translateX(${scrollPosition * -0.5 + 3330}px)`}; /* Adjust the multiplier to control speed */
  transition: transform 0.2s ease-out;
`;

const WorkListleft = styled.div<WorkListProps>`
  display: flex;
  padding: 32px 0px;
  flex-direction: low;
  align-items: flex-start;
  gap: 12px;
  transform: ${({ scrollPosition }) =>
    `translateX(${scrollPosition * 0.5 - 2000}px)`}; /* Adjust the multiplier to control speed */
  transition: transform 0.2s ease-out;
`;
const Worklistcontent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;
const WorkImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 100px;
`;
const Subtitle = styled.div`
  color: var(--800, #181826);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 744px) {
    font-size: 16px;
  }
`;

const Title = styled.div`
  color: var(--800, #181826);
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  @media (max-width: 1300px) {
    font-size: 48px;
  }
  @media (max-width: 744px) {
    font-size: 32px;
  }
`;

const WrapperTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const Button = styled.div`
  pointer-events: none;
  position: relative;
  width: 165px;
  height: 51px;
  border-radius: 100px;

  overflow: hidden;
  &::before {
    z-index: 0;
    content: '';
    position: absolute;
    top: -70px;
    left: -20px;
    width: 200px; /* 2배 */
    height: 200px; /* 2배 */
    background-repeat: no-repeat;
    background-size: 100%;
    /* background-image: linear-gradient(#5c40a6 50%, #b1a4d5 70%); */
    background: #ececf1;
    /* animation: ${RotateAnimation} 3s linear infinite; */
  }
  &:after {
    z-index: 0;
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border-radius: 100px;
    background: #f8f8fc;
  }
`;

const TextBox = styled.div`
  padding: 12px 20px 12px 16px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const ButtonText = styled.div`
  z-index: 1;
  color: var(--500, #bbbbc4);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
`;

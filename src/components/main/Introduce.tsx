import styled from 'styled-components';
import { ResponsiveContainer } from '../shared/Styles';
import { useEffect, useState } from 'react';
import { img } from './/Figma Image 1860x1044.png';

export default function Introduce() {
  const [screenWidth, setScreenWidth] = useState(window.outerWidth);
  useEffect(() => {
    setScreenWidth(window.outerWidth);
  }, [screenWidth]);
  return (
    <Layout>
      <Wrapper>
        <MainTextContainer>
          <TitleContainer>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <SubTitle>LOUPE의 의미</SubTitle>
              <MainTitle>다른 세상을 볼 수 있는 창</MainTitle>
            </div>
            <Description>
              루페는 하나의 확대도구로, 작은 무언가를 볼 수 있게 도와주는
              도구에요.{!(screenWidth >= 375) && <br />}
              가까이 있던 무언가가 루페를 통해 본다면 다른 모습으로 보이듯이,
              {!(screenWidth >= 375) && <br />}
              이번 졸업전시회의 루페는 정형적인 시각의 틀에서 벗어나
              {!(screenWidth >= 375) && <br />}
              다른 무언가를 볼 수 있게 도와주는 창이라는 뜻을 담았어요.
              {!(screenWidth >= 375) && <br />}
            </Description>
          </TitleContainer>
        </MainTextContainer>
        <MainContentCOntainer></MainContentCOntainer>
      </Wrapper>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2e2053;
  position: relative;
`;

const Wrapper = styled(ResponsiveContainer)`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;
const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const SubTitle = styled.div`
  color: var(--800, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
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
  width: 748px;
  font-size: 20px;
  line-height: 150%; /* 30px */
  @media (max-width: 1300px) {
    width: 502px;
    font-size: 18px;
  }
  @media (max-width: 744px) {
    width: 334px;
    font-size: 16px;
  }
`;
const MainContentCOntainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const ContentBox = styled.div`
  width: 930px;
  height: 522px;
  flex-shrink: 0;
  background-image: img;
`;
const ContentName = styled.div`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`;

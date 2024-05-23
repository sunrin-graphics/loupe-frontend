import React from 'react';
import styled from 'styled-components';
import { ResponsiveContainer } from '../shared/Styles';

export default function Introduce() {
  return (
    <Layout>
      <ResponsiveContainer>
        <Wrapper>
          <WrapperTop>
            <Subtitle>LOUPE란</Subtitle>
            <Title>
              작은 것을 볼 수 있는 <br />
              확대도구로서,
            </Title>
          </WrapperTop>
          <Description>
            바로 앞에서도 눈에 보이지 않는 작은 것들이라도 <br />
            루페를 통해 본다면 또 다른 모습이 보이는 것처럼 <br />
            이번 졸업전시에서의 ‘LOUPE’는 <br />
            정형적인 시각의 틀에서 벗어나 다른것을 볼 수 있게 해주는 창을
            뜻해요.
          </Description>
        </Wrapper>
      </ResponsiveContainer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #2e2053;
  position: relative;
  background-image: url('/overlay.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x;
`;

const Wrapper = styled.div`
  margin-top: 140px;
  display: flex;
  width: 552px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Subtitle = styled.div`
  color: var(--800, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
`;

const Title = styled.div`
  color: var(--800, #fff);
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const WrapperTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const Description = styled.div`
  color: var(--500, #bbbbc4);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`;

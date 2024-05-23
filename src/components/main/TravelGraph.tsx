import styled from 'styled-components';
import { Section } from '../shared/Styles';

export default function TravelGraph() {
  return (
    <Layout>
      <Section>
        <Wrapper>
          <Title data-aos="fade-up">선린인터넷고등학교를 다니던</Title>
          <MainText data-aos="fade-up">3년간의 기나긴 여행 끝에</MainText>
          <MainText data-aos="fade-up">이 곳에 도달하게 됐어요</MainText>
        </Wrapper>
        <img
          data-aos="fade-up"
          style={{
            marginTop: '60px',
            zIndex: '9',
            width: '100%',
          }}
          src="/map.png"
          alt=""
        />
      </Section>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #2e2053;
  overflow: hidden;
  background-image: url('/overlay.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x;
`;

const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 1300px) {
    margin-top: 64px;
  }
  @media (max-width: 744px) {
    margin-top: 48px;
  }
`;

const Title = styled.div`
  color: var(--800, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 744px) {
    font-size: 18px;
  }
`;

const MainText = styled.div`
  color: var(--800, #fff);
  text-align: center;
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

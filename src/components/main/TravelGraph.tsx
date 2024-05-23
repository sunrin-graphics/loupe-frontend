
import styled from 'styled-components';

export default function TravelGraph() {

    return (
        <Layout>
            <InLayout>
                <Wrapper>
                    <Title>
                        선린인터넷고등학교를 다니던
                    </Title>
                    <MainText>
                        3년간의 기나긴 여행 끝에
                    </MainText>
                    <MainText>
                        이 곳에 도달하게 됐어요
                    </MainText>
                </Wrapper>
                <img style={{
                    marginTop: '60px',
                    zIndex: '9',
                    width: '100%'
                }} src="/map.png" alt="" />
            </InLayout>
        </Layout >
    );
}

const Layout = styled.div`
  width: 100%;
  height:100vh;
  background-color: #2e2053;
  overflow:hidden;
  /* background-image: url('/overlay.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x; */
`;

const InLayout = styled.div`
    width:100%;
    height: 100%;
    padding-left:160px;
    padding-right:160px;
    @media (max-width: 744px){
        padding-left:160px;
        padding-right:160px;
    }
`

const Wrapper = styled.div`
  margin-top: 140px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items:center;
  box-sizing: border-box;
`;

const Title = styled.div`
    color: var(--800, #FFF);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
    text-align: center;
`

const MainText = styled.div`
    color: var(--800, #FFF);
    text-align: center;
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
`

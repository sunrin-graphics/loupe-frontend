import Main from "@/pages/Main";
import styled from "styled-components";

export default function TravelGraph(){
    return(
        <Layout>
            <Wrapper>
                <MainBackground>
                    <Title>
                        선린인터넷고등학교를 다니던 
                    </Title>
                    <MainText>
                        3년간의 기나긴 여행 끝에 
                    </MainText>
                    <MainText>
                        이 곳에 도달하게 됐어요
                    </MainText>
                </MainBackground>                
            </Wrapper>

        </Layout>
    )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #2e2053;
  position: relative;
  /* background-image: url('/overlay.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat-x; */
`;

const MainBackground = styled.div`
`

const Title = styled.div`
    color: var(--800, #FFF);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
    text-align: center;
`

const Wrapper = styled.div`
  padding-top: 140px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items:center;
  gap: 16px;
`;

const MainText = styled.div`
    color: var(--800, #FFF);
    text-align: center;
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
`
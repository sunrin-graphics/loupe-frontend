import styled from 'styled-components';

export default function WorkTop() {
  return (
    <WorkTopLayout>
      <ThumbnailContainer>
        <Thumbnail src="thumbnail.png" alt="thumbnail" />
      </ThumbnailContainer>
      <ContentHeadSection>
        <ContentHeadContainer>
          <ContentHeadTop>
            <ContentTitle>
              라온 - 어플리케이션 기반 반자유여행 서비스
            </ContentTitle>
            <ContentDescription>
              ‘라온!’은 지금까지 생소했던 여행 종류인 ‘반자유여행’을 전문으로
              다루는 브랜드에요. 사용자들은 라온만의 모바일 어플리케이션을
              활용하여 자신만의 여행을 만들어 갈 수 있게 도와주고, 이를 통해
              사용자들은 자신만의 여행을 부담 없이 떠날 수 있도록 하는 것이
              프로젝트의 목적이에요.
            </ContentDescription>
          </ContentHeadTop>
          <Authors>
            <Author>
              <AuthorProfile src="author.png" alt="author1" />
              <AuthorName>박시원</AuthorName>
            </Author>
            <Author>
              <AuthorProfile src="author.png" alt="author1" />
              <AuthorName>박시원</AuthorName>
            </Author>
            <Author>
              <AuthorProfile src="author.png" alt="author1" />
              <AuthorName>박시원</AuthorName>
            </Author>
            <Author>
              <AuthorProfile src="author.png" alt="author1" />
              <AuthorName>박시원</AuthorName>
            </Author>
          </Authors>
        </ContentHeadContainer>
      </ContentHeadSection>
    </WorkTopLayout>
  );
}

const WorkTopLayout = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  @media (max-width: 1440px) {
    flex-direction: column;
    height: auto;
  }
`;

const ThumbnailContainer = styled.div`
  flex: 1 0 0;
  align-self: stretch;
`;

const Thumbnail = styled.img`
  object-fit: cover;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const ContentHeadSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const ContentHeadTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ContentTitle = styled.div`
  color: var(--100, #181826);
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  @media (max-width: 1440px) {
    font-size: 56px;
  }
  @media (max-width: 744px) {
    font-size: 32px;
  }
`;

const ContentHeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 96px;
  @media (max-width: 1920px) {
    padding: 64px;
  }
  @media (max-width: 1440px) {
    padding: 32px;
    gap: 64px;
    justify-content: flex-start;
  }
  @media (max-width: 744px) {
    padding: 20px;
    gap: 40px;
    justify-content: flex-start;
  }
`;

const ContentDescription = styled.div`
  color: var(--300, #59596f);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  @media (max-width: 1440px) {
    font-size: 18px;
  }

  @media (max-width: 744px) {
    font-size: 16px;
  }
`;

const Authors = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AuthorProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const AuthorName = styled.div`
  color: var(--100, #181826);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
`;

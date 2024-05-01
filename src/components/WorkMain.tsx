import styled from 'styled-components';
import ContentAuthor from './ContentAuthor';
import { ResponsiveContainer } from './shared/styles';

export default function WorkMain() {
  return (
    <WorkMainLayout>
      <ArtImage src="art.png" alt="art" />
      <ContentAuthorSection>
        <ContentAuthorTop>
          <ContentAuthorTopLabel>참여 인원 </ContentAuthorTopLabel>
          <Line />
        </ContentAuthorTop>
        <ContentAuthorGroup>
          <ContentAuthor />
          <ContentAuthor />
          <ContentAuthor />
          <ContentAuthor />
        </ContentAuthorGroup>
      </ContentAuthorSection>
    </WorkMainLayout>
  );
}

const ContentAuthorSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const ContentAuthorTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const ContentAuthorTopLabel = styled.div`
  color: #878797;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  line-height: 150%; /* 21px */
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: var(--600, #ececf1);
`;

const ContentAuthorGroup = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: var(--New-group-Gutter, 16px);
  align-self: stretch;
  flex-wrap: wrap;
`;

const ArtImage = styled.img`
  align-self: stretch;
  border-radius: 16px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  @media (max-width: 1440px) {
    border-radius: 12px;
  }
  @media (max-width: 744px) {
    border-radius: 8px;
  }
`;

const WorkMainLayout = styled(ResponsiveContainer)`
  display: flex;
  padding-top: 120px;
  padding-bottom: 120px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  @media (max-width: 1920px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (max-width: 1440px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media (max-width: 744px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

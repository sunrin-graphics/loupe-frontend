import styled from 'styled-components';
import sunrinLogo from '../assets/sunrin.svg';
import youtube from '../assets/youtube.svg';
import link from '../assets/link.svg';
import instagram from '../assets/instagram.svg';

export default function Footer() {
  return (
    <FooterLayout>
      <FooterContainer>
        <FooterBlock>
          <FooterRow>
            <img src={sunrinLogo} alt="sunrinLogo" />
            <FooterSemiLabel>
              <Strong>선린인터넷고등학교 </Strong>
              콘텐츠디자인과
            </FooterSemiLabel>
          </FooterRow>
          <FooterColumn>
            <FooterText>© 2024 선린인터넷고등학교 콘텐츠디자인과</FooterText>
            <FooterText>서울특별시 용산구 원효로97길 33-4</FooterText>
            <FooterText>Tel. 713-6213 | Fax. 704-0960</FooterText>
          </FooterColumn>
        </FooterBlock>
        <FooterBlock>
          <FooterSemiLabel>
            선린인터넷고등학교 <br />
            콘텐츠디자인과 졸업전시회
          </FooterSemiLabel>
          <FooterColumn>
            <FooterRow>
              <FooterLabel>웹 디자인</FooterLabel>
              <FooterName>박시원</FooterName>
              <FooterName>박정우</FooterName>
              <FooterName>백시현</FooterName>
              <FooterName>오지후</FooterName>
            </FooterRow>
            <FooterRow>
              <FooterLabel>웹 개발</FooterLabel>
              <FooterName>주현명</FooterName>
              <FooterName>김성빈</FooterName>
              <FooterName>박찬규</FooterName>
              <FooterName>홍예훈</FooterName>
              <FooterName>차호림</FooterName>
            </FooterRow>
          </FooterColumn>
        </FooterBlock>
        <FooterBlock>
          <FooterSemiLabel>웹사이트 바로가기</FooterSemiLabel>
          <FooterLinkItem>
            <FooterIcon>
              <img src={link} alt="youtube" />
            </FooterIcon>

            <FooterLink>학교 공식 웹사이트</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterIcon>
              <img src={instagram} alt="youtube" />
            </FooterIcon>
            <FooterLink>졸업전시회 인스타그램</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FooterIcon>
              <img src={youtube} alt="youtube" />
            </FooterIcon>
            <FooterLink>졸업전시회 유튜브</FooterLink>
          </FooterLinkItem>
        </FooterBlock>
      </FooterContainer>
    </FooterLayout>
  );
}

const FooterLinkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FooterSemiLabel = styled.div`
  color: var(--100, #181826);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;

const FooterLayout = styled.footer`
  display: flex;
  width: 100%;
  padding-top: 48px;
  align-items: flex-end;
`;

const FooterContainer = styled.div`
  display: flex;
  padding: 48px var(--New-group-Margin, 240px);
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
  row-gap: 32px;
  flex: 1 0 0;
  flex-wrap: wrap;
  border: 1px solid var(--600, #ececf1);
  background: var(--700, #f8f8fc);
  @media (max-width: 1920px) {
    padding: 48px 160px;
  }
  @media (max-width: 1440px) {
    padding: 48px 32px;
  }
  @media (max-width: 744px) {
    padding: 48px 20px;
  }
`;

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  align-items: flex-start;
  gap: 8px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const FooterText = styled.div`
  color: var(--400, #878797);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

const FooterLabel = styled.div`
  width: var(--Title, 64px);
  color: var(--400, #878797);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  user-select: none;
`;

const FooterRow = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;
`;

const FooterName = styled.div`
  color: var(--300, #59596f);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

const Strong = styled.span`
  font-weight: 600;
`;

const FooterLink = styled.a`
  color: var(--300, #59596f);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--100, #181826);
  }
`;

const FooterIcon = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  gap: 8.333px;
`;

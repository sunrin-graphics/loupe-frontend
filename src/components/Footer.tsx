import React from 'react';
import styled from 'styled-components';
import sunrinLogo from '../assets/sunrin.svg';
import youtube from '../assets/youtube.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';

export default function Footer() {
  return (
    <FooterLayout>
      <FooterContainer>
        <FooterInfo>
          <FooterRow>
            <img src={sunrinLogo} alt="sunrinLogo" />
            <FooterHead>
              <Strong>선린인터넷고등학교 </Strong>
              콘텐츠디자인과
            </FooterHead>
          </FooterRow>
          <FooterColumn>
            <FooterText>© 2024 선린인터넷고등학교 콘텐츠디자인과</FooterText>
            <FooterText>서울특별시 용산구 원효로97길 33-4</FooterText>
            <FooterText>Tel. 713-6213 | Fax. 704-0960</FooterText>
          </FooterColumn>
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
        </FooterInfo>
        <FooterLinkGroup>
          <FooterIcon>
            <img src={sunrinLogo} alt="youtube" />
          </FooterIcon>
          <FooterIcon>
            <img src={youtube} alt="youtube" />
          </FooterIcon>
          <FooterIcon>
            <img src={facebook} alt="youtube" />
          </FooterIcon>
          <FooterIcon>
            <img src={instagram} alt="youtube" />
          </FooterIcon>
        </FooterLinkGroup>
      </FooterContainer>
    </FooterLayout>
  );
}

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
  @media (max-width: 1440px) {
    padding: 48px 160px;
  }
  @media (max-width: 744px) {
    padding: 48px 32px;
  }
  @media (max-width: 375px) {
    padding: 48px 20px;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--New-group-Gutter, 16px);
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

  gap: 8px;
`;

const FooterName = styled.div`
  color: var(--300, #59596f);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

const FooterHead = styled.div`
  color: var(--100, #181826);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  user-select: none;
`;

const Strong = styled.span`
  font-weight: 600;
`;

const FooterLinkGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

const FooterIcon = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid var(--600, #ececf1);
  background: var(--800, #fff);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: var(--100, #e3e3e6);
  }
  &:active {
    background: var(--100, #d3d3d6);
    transform: translateY(1px);
  }
`;

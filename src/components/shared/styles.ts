import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin-top: 60px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  @media (max-width: 1920px) {
    padding: 0 160px;
  }
  @media (max-width: 1440px) {
    padding: 0 32px;
  }
  @media (max-width: 744px) {
    padding: 0 20px;
  }
`;

export const SectionTop = styled.div`
  width: 100%;
  display: flex;
  padding: 128px 0px 16px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

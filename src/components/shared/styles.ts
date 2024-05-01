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

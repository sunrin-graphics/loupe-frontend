import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  @media (max-width: 1300px) {
    padding: 0 38px;
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

export const Section = styled(ResponsiveContainer)`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  min-height: 100vh;
`;

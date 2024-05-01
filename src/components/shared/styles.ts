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
`;

export const Section = styled(ResponsiveContainer)`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  min-height: 100vh;
`;

export const PageTitle = styled.div`
  color: var(--100, #181826);
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 80px; /* 142.857% */

  @media (max-width: 1440px) {
    font-size: 48px;
    line-height: 64px;
  }
  @media (max-width: 744px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

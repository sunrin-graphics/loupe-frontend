import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { ResponsiveContainer } from './shared/styles';

export default function HeaderTransparent() {
  const location = useLocation();
  const { pathname } = location;
  // header visible when scroll down

  return (
    <Layout>
      <Container>
        <Link to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} />
        </Link>
        <Nav>
          <li>
            <NavItem $active={pathname === '/works'} to={'/works'}>
              작품
            </NavItem>
          </li>
          <li>
            <NavItem $active={pathname === '/member'} to={'/member'}>
              참여 인원
            </NavItem>
          </li>
          <li>
            <NavItem $active={pathname === '/guestbook'} to={'/guestbook'}>
              방명록
            </NavItem>
          </li>
          <li>
            <NavItem $active={pathname === '/credit'} to={'/credit'}>
              크레딧
            </NavItem>
          </li>
        </Nav>
      </Container>
    </Layout>
  );
}

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media (max-width: 744px) {
    display: none;
  }
`;

const NavItem = styled(Link)<{ $active: boolean }>`
  color: ${(props) => (props.$active ? 'var(--100, #181826)' : '#F8F8FC')};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  cursor: pointer;
  text-decoration: none;
  transition:
    color 0.2s,
    transform 0.2s;
  &:hover {
    color: #bbbbc4;
  }
  &:active {
    transform: translateY(1px);
  }
  user-select: none;
`;

const Container = styled(ResponsiveContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

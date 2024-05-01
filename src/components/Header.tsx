import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ResponsiveContainer } from './shared/styles';

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <Layout
      style={{
        boxShadow: visible ? '0px 4px 8px rgba(0, 0, 0, 0.05)' : 'none',
        transition: 'box-shadow 0.2s',
      }}
    >
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
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 60px;
  background: var(--800, #fff);
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
  color: ${(props) =>
    props.$active ? 'var(--100, #181826)' : 'var(--500, #BBBBC4)'};
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
    color: var(--100, #181826);
  }
  &:active {
    color: var(--100, #181826);
    transform: translateY(1px);
  }
  user-select: none;
`;

const Container = styled(ResponsiveContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

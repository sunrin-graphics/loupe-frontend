import styled, { keyframes } from 'styled-components';
import Logo from '../assets/logo.svg';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const [visible, setVisible] = useState(false);
  // header visible when scroll down

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
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
        display: visible ? 'flex' : 'none',
      }}
    >
      <img src={Logo} />
      <Nav>
        <li>
          <NavItem active={pathname === '/work'} to={'/work'}>
            작품
          </NavItem>
        </li>
        <li>
          <NavItem active={pathname === '/member'} to={'/member'}>
            참여 인원
          </NavItem>
        </li>
        <li>
          <NavItem active={pathname === '/letter'} to={'/letter'}>
            방명록
          </NavItem>
        </li>
        <li>
          <NavItem active={pathname === '/credit'} to={'/credit'}>
            크레딧
          </NavItem>
        </li>
      </Nav>
    </Layout>
  );
}

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    `;

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0px var(--New-group-Margin, 240px);
  justify-content: space-between;
  align-items: center;
  background: var(--800, #fff);
  @media (max-width: 1920px) {
    padding: 0 160px;
  }
  @media (max-width: 1440px) {
    padding: 0 32px;
  }
  @media (max-width: 744px) {
    padding: 0 20px;
  }
  animation: ${fadeIn} 0.5s;
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

const NavItem = styled(Link)<{ active: boolean }>`
  color: ${(props) =>
    props.active ? 'var(--100, #181826)' : 'var(--500, #BBBBC4)'};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: var(--100, #181826);
  }
  &:active {
    color: var(--100, #181826);
    transform: translateY(1px);
  }
  user-select: none;
`;

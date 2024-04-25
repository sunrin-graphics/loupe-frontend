import styled from 'styled-components';
import Logo from '../assets/logo.svg';

export default function Header() {
  return (
    <Layout>
      <img src={Logo} />
      <Nav>
        <li>
          <NavItem>WORKS</NavItem>
        </li>
        <li>
          <NavItem>PROFILE</NavItem>
        </li>
        <li>
          <NavItem>GUEST BOOK</NavItem>
        </li>
        <li>
          <NavItem>CREDIT</NavItem>
        </li>
      </Nav>
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

const NavItem = styled.li`
  color: var(--500, #bbbbc4);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  cursor: pointer;
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

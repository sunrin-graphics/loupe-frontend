import styled, { css, keyframes } from 'styled-components';
import Logo from '../assets/logo.svg';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ResponsiveContainer } from './shared/styles';

interface Props {
  scroll?: {
    transparent?: boolean;
    y: number;
  };
  transparent?: boolean;
}
export default function Header({ scroll, transparent }: Props) {
  const location = useLocation();
  const { pathname } = location;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!scroll) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > scroll.y) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, [scroll]);

  return (
    <Layout
      $animation={!!scroll?.transparent}
      style={{
        boxShadow:
          visible && scroll ? '0px 4px 8px rgba(0, 0, 0, 0.05)' : 'none',
        transition: 'box-shadow 0.2s',
        ...(scroll?.transparent && { display: visible ? 'flex' : 'none' }),
        backgroundColor: transparent ? 'transparent' : 'var(--100, #ffffff)',
      }}
    >
      <Container>
        <Link to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} />
        </Link>

        <Nav>
          <li>
            <NavItem
              $transparent={!!transparent}
              $active={pathname.startsWith('/work')}
              to={'/works'}
            >
              작품
            </NavItem>
          </li>
          <li>
            <NavItem
              $transparent={!!transparent}
              $active={pathname === '/member'}
              to={'/member'}
            >
              참여 인원
            </NavItem>
          </li>
          <li>
            <NavItem
              $transparent={!!transparent}
              $active={pathname === '/guestbook'}
              to={'/guestbook'}
            >
              방명록
            </NavItem>
          </li>
          <li>
            <NavItem
              $transparent={!!transparent}
              $active={pathname === '/credit'}
              to={'/credit'}
            >
              크레딧
            </NavItem>
          </li>
        </Nav>
      </Container>
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

const Layout = styled.div<{ $animation: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 60px;
  ${(props) =>
    props.$animation &&
    css`
      animation: ${fadeIn} 0.5s;
    `}
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

const NavItem = styled(Link)<{ $active: boolean; $transparent: boolean }>`
  color: ${(props) =>
    props.$active
      ? 'var(--100, #181826)'
      : `${props.$transparent ? '#F8F8FC' : 'var(--500, #BBBBC4)'}`};
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
    color: ${(props) => (props.$transparent ? '#bbbbc4' : '#181826')};
  }
  &:active {
    ${(props) => props.$transparent && 'color: var(--100, #181826)'};
    transform: translateY(1px);
  }
  user-select: none;
`;

const Container = styled(ResponsiveContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

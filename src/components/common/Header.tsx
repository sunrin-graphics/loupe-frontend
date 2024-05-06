import styled, { css, keyframes } from 'styled-components';
import Logo from '@/assets/logo.svg';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ResponsiveContainer } from '../shared/Styles';
import { ReactComponent as NavButton } from '@/assets/nav-button.svg';
import { ReactComponent as CloseButton } from '@/assets/nav-close.svg';
import { motion } from 'framer-motion';

interface Props {
  scroll?: {
    transparent?: boolean;
    y: number;
  };
  transparent?: boolean;
}
export default function Header({ scroll, transparent }: Props) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const [visible, setVisible] = useState(false);

  const mobileNavAnimation = {
    hidden: { y: -20 },
    visible: {
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    if (!scroll) return;

    window.addEventListener('scroll', () => {
      console.log(window.scrollY, scroll.y);
      if (window.scrollY > scroll.y) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 744) {
        setOpen(false);
      }
    });
  }, [scroll]);

  const openNav = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트 unmount 시에 원래 스타일로 복구
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <Layout
      $animation={!!scroll?.transparent}
      style={{
        boxShadow:
          visible && scroll ? '0px 4px 8px rgba(0, 0, 0, 0.05)' : 'none',
        transition: 'box-shadow 0.2s',
        ...(scroll?.transparent && { display: visible ? 'flex' : 'none' }),
        backgroundColor: open
          ? '#fff'
          : transparent
            ? 'transparent'
            : 'var(--100, #ffffff)',
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
              $active={pathname === '/introduce'}
              to={'/introduce'}
            >
              소개
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
        </Nav>
        <MobileNavButton
          $open={open}
          $transparent={transparent}
          onClick={openNav}
        >
          {open ? <CloseButton /> : <NavButton />}
        </MobileNavButton>
      </Container>
      {open && (
        <>
          <MobileNav
            variants={mobileNavAnimation}
            initial="hidden"
            animate="visible"
            $transparent={transparent}
          >
            <MobileNavItem
              $transparent={!!transparent}
              $active={pathname.startsWith('/work')}
              to={'/works'}
            >
              작품
            </MobileNavItem>
            <MobileNavItem
              $transparent={!!transparent}
              $active={pathname === '/member'}
              to={'/member'}
            >
              참여 인원
            </MobileNavItem>
            <MobileNavItem
              $transparent={!!transparent}
              $active={pathname === '/guestbook'}
              to={'/guestbook'}
            >
              방명록
            </MobileNavItem>
            <MobileNavItem
              $transparent={!!transparent}
              $active={pathname === '/credit'}
              to={'/credit'}
            >
              크레딧
            </MobileNavItem>
          </MobileNav>
          <Overlay onClick={openNav} />
        </>
      )}
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  top: 60px;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s;
`;

const MobileNavButton = styled.div<{
  $active?: boolean;
  $transparent?: boolean;
  $open?: boolean;
}>`
  color: ${(props) =>
    `${props.$open ? '#BBBBC4' : props.$transparent ? '#ffffff' : 'var(--500, #BBBBC4)'}`};
  display: none;
  @media (max-width: 744px) {
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const MobileNav = styled(motion.div)<{ $transparent?: boolean }>`
  display: none;
  position: absolute;
  width: 100%;
  z-index: 1000;
  top: 60px;
  padding-bottom: 8px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #fff;
  @media (max-width: 744px) {
    display: flex;
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

const MobileNavItem = styled(NavItem)`
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  color: ${(props) =>
    props.$active ? 'var(--100, #181826)' : 'var(--500, #BBBBC4)'};
  &:hover {
    color: ${(props) =>
      props.$active ? 'var(--100, #181826)' : 'var(--500, #BBBBC4)'};
  }
`;

const Container = styled(ResponsiveContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1001;
`;

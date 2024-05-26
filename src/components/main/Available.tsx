import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { DateTime, Duration } from 'luxon';
import { ReactComponent as CinematicImg } from '@/assets/cinematic.svg';
import { ReactComponent as InstagramImg } from '@/assets/instagramBig.svg';
import { ResponsiveContainer } from '../shared/Styles';
import smap from '@/assets/images/smap.webp';

const OPEN_DATE = DateTime.fromISO('2024-05-29T13:00:00');

export default function Available() {
  const layoutRef = useRef<HTMLDivElement>(null);

  const [time, setTime] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  function handleScroll() {
    const scrollTop = window.scrollY;
    setScrollY(scrollTop);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const now = DateTime.now().setZone('Asia/Seoul');

    setTimeout(() => {
      const diff = OPEN_DATE.diff(now, ['days', 'hours', 'minutes', 'seconds']);
      if (diff.as('seconds') < 0) return;
      setTime(diff.as('seconds'));
    }, 1000);
  }, [time]);

  return (
    <Layout ref={layoutRef}>
      <Container
        style={{
          opacity:
            (layoutRef.current?.offsetTop ?? 0) + 200 - scrollY <
            window.innerHeight
              ? 1
              : 0,
          width:
            layoutRef.current?.offsetTop ?? 0 - scrollY < window.innerHeight
              ? ((scrollY +
                  (window.innerHeight ?? 0) -
                  (layoutRef.current?.offsetTop ?? 0) -
                  150) /
                  (layoutRef.current?.offsetHeight ?? 0)) *
                  100 +
                '%'
              : 'calc(100% - 48px)',
        }}
      >
        <Wrapper>
          <ContentWrapper>
            <Content>
              <h1>
                작품 공개까지
                <br />
                {Duration.fromObject({ seconds: time }).toFormat(
                  'd일 hh시 mm분 ss초',
                )}{' '}
                {width < 492 && <br />}
                남았어요!
              </h1>

              <p>
                3년간의 여정을 거쳐 발견한{width < 492 && <br />} 또 다른 세계를
                보고 싶으시다면,
                <br />
                공식 티저 및 작품에 많은 관심과{width < 492 && <br />} 성원
                부탁드립니다!
              </p>
            </Content>

            <ButtonGroup>
              <button>
                <CinematicImg />
                <p>공식 티저</p>
              </button>

              <a href="https://instagram.com/sr_design_exhibit" target="_blank">
                <InstagramImg />
                <p>공식 인스타그램</p>
              </a>
            </ButtonGroup>
          </ContentWrapper>

          <img src={smap} alt="loupe" />
        </Wrapper>
      </Container>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  padding: 48px 0;
  align-items: center;
  gap: 16px;
  justify-content: center;
  background: #fff;

  @media (max-width: 1300px) {
    padding: 0 32px;
  }
  @media (max-width: 744px) {
    padding: 0 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1022px;
  position: relative;
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Container = styled(ResponsiveContainer)`
  padding: 48px;
  border-radius: 24px;
  border: 1px solid var(--600, #ececf1);
  background: var(--700, #f8f8fc);
  overflow: hidden;
  width: auto;

  transition: opacity 0.3s;

  display: grid;
  justify-content: center;

  img {
    width: 280px;
    height: 280px;
    border-radius: 280px;
    padding: 12px;
    background: linear-gradient(90deg, #5c40a6, #b1a4d5);
    @media (max-width: 1300px) {
      display: none;
    }
  }

  @media (max-width: 1300px) {
    padding: 40px;
    justify-content: flex-start;
  }
  @media (max-width: 744px) {
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: max-content;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    color: var(--100, #181826);
    font-size: 56px;
    font-weight: 600;
    line-height: 150%;
    @media (max-width: 1300px) {
      font-size: 48px;
    }
    @media (max-width: 744px) {
      font-size: 32px;
    }
  }

  p {
    color: var(--300, #59596f);
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    @media (max-width: 1300px) {
      font-size: 18px;
    }
    @media (max-width: 744px) {
      font-size: 16px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    fill: var(--500, #bbbbc4);
    width: 24px;
    height: 24px;
    @media (max-width: 1300px) {
      width: 20px;
      height: 20px;
    }
  }

  a {
    display: flex;
    padding: 12px 20px 12px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    border: 1.5px solid var(--600, #ececf1);
    background: var(--800, #fff);
    transition:
      background 0.2s,
      transform 0.2s;

    &:hover {
      background: var(--700, #f8f8fc);
    }

    &:active {
      transform: scale(0.95);
      background: var(--600, #ececf1);
    }

    p {
      color: var(--100, #181826);
      font-size: 18px;
      font-weight: 600;
      line-height: 150%; /* 27px */
      @media (max-width: 1300px) {
        font-size: 16px;
      }
      @media (max-width: 744px) {
        font-size: 14px;
      }
    }
  }

  button {
    display: flex;
    padding: 12px 20px 12px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    border: 1.5px solid var(--600, #ececf1);
    background: var(--800, #fff);
    transition:
      background 0.2s,
      transform 0.2s;

    p {
      color: var(--500, #bbbbc4);
      font-size: 18px;
      font-weight: 600;
      line-height: 150%; /* 27px */
      @media (max-width: 1300px) {
        font-size: 16px;
      }
      @media (max-width: 744px) {
        font-size: 14px;
      }
    }
  }
`;

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { DateTime, Duration } from 'luxon';
import { ReactComponent as CinematicImg } from '@/assets/cinematic.svg';
import { ReactComponent as InstagramImg } from '@/assets/instagramBig.svg';
import { ResponsiveContainer } from '../shared/Styles';

const OPEN_DATE = DateTime.fromISO('2024-05-29T13:00:00');

export default function Available() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const now = DateTime.now().setZone('Asia/Seoul');

    setTimeout(() => {
      const diff = OPEN_DATE.diff(now, ['days', 'hours', 'minutes', 'seconds']);
      if (diff.as('seconds') < 0) return;
      setTime(diff.as('seconds'));
    }, 1000);
  }, [time]);

  return (
    <Layout>
      <ResponsiveContainer>
        <Container data-aos="flip-left">
          <ContentWrapper>
            <Content>
              <h1>
                작품 공개까지
                <br />
                {Duration.fromObject({ seconds: time }).toFormat(
                  'd일 hh시 mm분 ss초',
                )}{' '}
                남았어요!
              </h1>

              <p>
                3년간의 여정을 거쳐 발견한 또 다른 세계를 보고 싶으시다면,
                <br />
                공식 티저 및 작품에 많은 관심과 성원 부탁드립니다!
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

          <img src="/smap.png" alt="loupe" />
        </Container>
      </ResponsiveContainer>
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
`;

const Container = styled(ResponsiveContainer)`
  display: flex;
  padding: 48px;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 0;
  border-radius: 24px;
  border: 1px solid var(--600, #ececf1);
  background: var(--700, #f8f8fc);

  img {
    width: 280px;
    height: 280px;
    border-radius: 280px;
    padding: 12px;
    background: linear-gradient(90deg, #5c40a6, #b1a4d5);
    @media (max-width: 744px) {
      display: none;
    }
  }
  @media (max-width: 1300px) {
    padding: 40px;
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
      color: var(--100, #bbbbc4);
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

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { DateTime, Duration } from 'luxon';
import { ReactComponent as CinematicImg } from '@/assets/cinematic.svg';
import { ReactComponent as InstagramImg } from '@/assets/instagramBig.svg';
import { motion } from 'framer-motion';

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
    <Container>
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
            학생들의 3년간의 여정 끝에 발견한 또 다른 세계가 궁금하다면,
            <br />
            공식 티저 및 학생들의 작품에도 많은 관심 부탁드립니다!
          </p>
        </Content>

        <ButtonGroup>
          <button>
            <CinematicImg />
            <p>공식 티저</p>
          </button>

          <button>
            <InstagramImg />
            <p>공식 인스타그램</p>
          </button>
        </ButtonGroup>
      </ContentWrapper>

      <img src="/smap.png" alt="loupe" />
    </Container>
  );
}

const Container = styled(motion.div)`
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
  }

  p {
    color: var(--300, #59596f);
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
  }

  button {
    display: flex;
    padding: 12px 20px 12px 16px;
    align-items: center;
    gap: 4px;
    border-radius: 100px;
    border: 2px solid var(--600, #ececf1);
    background: var(--800, #fff);

    p {
      color: var(--100, #181826);
      font-size: 18px;
      font-weight: 600;
      line-height: 150%; /* 27px */
    }
  }
`;

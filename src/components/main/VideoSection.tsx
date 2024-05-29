import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { ResponsiveContainer } from '../shared/Styles';

export default function VideoSection() {
  const layoutRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const [width, setWidth] = useState(0);
  const [debounceWidth, setDebounceWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setDebounceWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebounceWidth(width);
    }, 100);

    return () => {
      clearTimeout(debounce);
    };
  }, [width]);

  function handleScroll() {
    const scrollTop = window.scrollY;
    setScrollY(scrollTop);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <Wrapper
          style={{
            width:
              debounceWidth > 1300
                ? '1022px'
                : debounceWidth > 744
                  ? (layoutRef?.current?.offsetWidth ?? 0) - 80 - 64 + 'px'
                  : (layoutRef?.current?.offsetWidth ?? 0) - 48 - 40 + 'px',
          }}
        >
          <Content>
            유튜브에서 <br />
            메인 티저 영상을 <br />
            확인해보세요! <br />
          </Content>
          <VideoEmbed>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9bZkp7q19f0"
              title="loupe 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoEmbed>
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

const VideoEmbed = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 28px;
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
  border: 1px solid #ececf1;
  background: #f8f8fc;
  overflow: hidden;
  width: auto;
  transition: opacity 0.3s;

  display: grid;
  justify-content: center;

  @media (max-width: 1300px) {
    padding: 40px;
  }
  @media (max-width: 744px) {
    padding: 24px;
    flex-direction: column;
  }
`;

const Content = styled.div`
  color: #181826;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 48px */
  @media (max-width: 1300px) {
    font-size: 48px;
  }
  @media (max-width: 744px) {
    font-size: 32px;
  }
`;

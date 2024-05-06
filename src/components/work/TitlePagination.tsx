import styled from 'styled-components';
import { PageTitle } from '../shared/Styles';

import ArrowLeftImg from '@/assets/arrow_left.svg';
import ArrowRightImg from '@/assets/arrow_right.svg';
import { useCallback, useEffect, useState } from 'react';

import FontFaceObserver from 'fontfaceobserver';

interface Props {
  title: string[];
  state: [string, (title: string) => void];
}
export default function TitlePagination(props: Props) {
  const [title, setTitle] = props.state;

  const [titleWidth, setTitleWidth] = useState<{ [key: string]: number }>({});
  const [spacerWidth, setSpacerWidth] = useState(0);

  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [broswerDebounce, setBrowserDebounce] = useState(0);

  useEffect(() => {
    if (props.title.length === 0) return;
    setSpacerWidth(titleWidth[props.title[0]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleWidth]);

  useEffect(() => {
    const handleResize = () => {
      setBrowserWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setBrowserDebounce(browserWidth);
    }, 100);

    return () => {
      clearTimeout(debounce);
    };
  }, [browserWidth]);

  const handleClick = useCallback(
    (direction: 'left' | 'right') => {
      const index = props.title.indexOf(title);
      if (direction === 'left') {
        if (index === 0) return;
        setTitle(props.title[index - 1]);
      } else {
        if (index === props.title.length - 1) return;
        setTitle(props.title[index + 1]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.title, title, titleWidth],
  );

  useEffect(() => {
    const categoryEl = document.querySelectorAll('.category');

    const observer = new FontFaceObserver('SUITE Variable');

    observer.load().then(() => {
      categoryEl.forEach((el) => {
        const _title = el.textContent;
        if (!_title) return;
        setTitleWidth((prev) => ({
          ...prev,
          [_title]: _title === title ? el.clientWidth - 129 : el.clientWidth,
        }));
      });
    });
  }, [title, broswerDebounce]);

  useEffect(() => {
    setSpacerWidth(titleWidth[title]);
  }, [title, titleWidth]);

  return (
    <Layout>
      <TitleContainer
        $left={(() => {
          if (titleWidth[title] === undefined) return 0;
          return Object.entries(titleWidth)
            .filter(
              ([key]) => props.title.indexOf(key) > props.title.indexOf(title),
            )
            .reduce((acc, [, value]) => acc + value + 24, 0);
        })()}
        $right={(() => {
          if (titleWidth[title] === undefined) return 0;
          return Object.entries(titleWidth)
            .filter(
              ([key]) => props.title.indexOf(key) < props.title.indexOf(title),
            )
            .reduce((acc, [, value]) => acc + value + 24, 0);
        })()}
      >
        {props.title.map((_title, index) => (
          <Title
            className="category"
            $selected={_title === title}
            key={index}
            onClick={() => {
              setTitle(_title);
            }}
          >
            {_title}
          </Title>
        ))}
      </TitleContainer>

      <SelectContainer>
        <button
          onClick={() => {
            handleClick('left');
          }}
        >
          <ArrowImg src={ArrowLeftImg} alt="left arrow" />
        </button>

        <Spacer $width={spacerWidth} />

        <button
          onClick={() => {
            handleClick('right');
          }}
        >
          <ArrowImg src={ArrowRightImg} alt="right arrow" />
        </button>
      </SelectContainer>

      <Blur onClick={(e) => e.stopPropagation()} $position="left" />
      <Blur $position="right" />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  height: 84px;
`;

const Title = styled(PageTitle)<{ $selected: boolean }>`
  padding: 0 ${({ $selected }) => ($selected ? 52 : 0)}px;
  color: ${({ $selected }) => ($selected ? '#000' : 'var(--500, #BBBBC4)')};
  transition: color 0.3s;
`;

const TitleContainer = styled.div<{ $left: number; $right: number }>`
  display: flex;
  align-items: center;
  gap: 24px;

  position: absolute;
  padding-left: ${({ $left }) => $left}px;
  padding-right: ${({ $right }) => $right}px;
  transition: 0.3s;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  white-space: nowrap;
`;

const Blur = styled.div.attrs({
  onClick: (e: React.MouseEvent) => e.stopPropagation(),
})<{ $position: 'left' | 'right' }>`
  position: absolute;
  ${({ $position }) => $position}: 0;

  width: 240px;
  height: 100px;
  flex-shrink: 0;

  background: linear-gradient(
    ${({ $position }) => ($position === 'left' ? '240' : '90')}deg,
    rgba(255, 255, 255, 0) 0%,
    #fff 100%
  );
`;

const SelectContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  gap: 4px;
`;

const Spacer = styled.div<{ $width: number }>`
  width: ${({ $width }) => $width}px;
  transition: width 0.3s;
`;

const ArrowImg = styled.img`
  width: 48px;
  height: 48px;
`;

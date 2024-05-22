import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as ArrowBottomIcon } from '@/assets/arrowbottom.svg';

export default function MainBackground() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.3;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.3, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const titleAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 0.5,
        duration: 1.5,
      },
    },
  };

  const MapFloatAnimation = {
    hidden: { y: '100%' },
    visible: {
      scale: 1.2,
      y: 0,
      transition: {
        y: {
          yoyo: Infinity,
          duration: 1.3,
          type: 'spring',
        },
      },
    },
  };

  return (
    <MainLayout>
      <MainLayoutContent>
        <Title initial="hidden" animate="visible" variants={titleAnimation}>
          제13회 선린인터넷고등학교 콘텐츠디자인과 졸업전시회
        </Title>
        <div
          style={{
            width: '100%',
            maxWidth: 1260,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <motion.svg
            initial="hidden"
            animate="visible"
            width="100%"
            viewBox="0 0 1242 439"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M16 209.441C16 209.441 105.481 168.515 131.246 147.668C175.537 111.821 154.516 67.588 121.976 83.7347C84.6196 102.261 74.5951 145.753 113.605 252.745C152.615 359.736 185.242 405.87 127.242 422.176C108.412 427.471 92.1925 389.085 128.591 361.608C208.295 301.417 268.863 331.94 294.163 279.729"
              stroke="white"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ mixBlendMode: 'overlay' }}
              variants={draw}
              custom={0}
            />
            <motion.path
              d="M16 209.441C16 209.441 105.481 168.515 131.246 147.668C175.537 111.821 154.516 67.588 121.976 83.7347C84.6196 102.261 74.5951 145.753 113.605 252.745C152.615 359.736 185.242 405.87 127.242 422.176C108.412 427.471 92.1925 389.085 128.591 361.608C208.295 301.417 268.863 331.94 294.163 279.729"
              stroke="url(#paint0_linear_1090_3543)"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              variants={draw}
              custom={1}
            />
            <motion.path
              d="M733.778 16.0142C733.778 16.0142 790.603 204.885 650.448 208.976C510.292 204.885 567.117 16.0142 567.117 16.0142"
              stroke="white"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ mixBlendMode: 'overlay' }}
              variants={draw}
              custom={4}
            />
            <motion.path
              d="M733.778 16.0142C733.778 16.0142 790.603 204.885 650.448 208.976C510.292 204.885 567.117 16.0142 567.117 16.0142"
              stroke="url(#paint1_linear_1090_3543)"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              variants={draw}
              custom={5}
            />
            <motion.path
              d="M305.463 134.046C294.162 78.5703 317.33 37.9643 376.129 27.7657C437.059 17.7556 479.406 80.0791 487.748 136.513C495.959 192.119 471.833 229.446 419.201 239.747C411.135 241.284 402.604 241.734 394.48 240.588C362.506 236.874 331.707 207.149 323.772 182.457"
              stroke="white"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ mixBlendMode: 'overlay' }}
              variants={draw}
              custom={2}
            />
            <motion.path
              d="M305.463 134.046C294.162 78.5703 317.33 37.9643 376.129 27.7657C437.059 17.7556 479.406 80.0791 487.748 136.513C495.959 192.119 471.833 229.446 419.201 239.747C411.135 241.284 402.604 241.734 394.48 240.588C362.506 236.874 331.707 207.149 323.772 182.457"
              stroke="url(#paint2_linear_1090_3543)"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              variants={draw}
              custom={3}
            />
            <motion.path
              d="M826.67 72.5205C826.67 72.5205 838.319 16 909.754 16C992.46 16 1016.48 76.4085 1001.41 120.873C978.866 187.36 860.269 152.05 821.926 130.796C821.926 130.796 808.246 193.323 819.344 234.857"
              stroke="white"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ mixBlendMode: 'overlay' }}
              variants={draw}
              custom={6}
            />
            <motion.path
              d="M826.67 72.5205C826.67 72.5205 838.319 16 909.754 16C992.46 16 1016.48 76.4085 1001.41 120.873C978.866 187.36 860.269 152.05 821.926 130.796C821.926 130.796 808.246 193.323 819.344 234.857"
              stroke="url(#paint3_linear_1090_3543)"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              variants={draw}
              custom={7}
            />
            <motion.path
              d="M1225.49 78.5698C1225.49 78.5698 1155.13 107.991 1084.39 89.5374C1084.39 89.5374 1076.66 131.244 1054.18 181.5M1172.1 417.562C1102.87 338.498 980.272 290.754 980.272 290.754C1014.26 258.119 1038.03 217.603 1054.18 181.5M1054.18 181.5C1080.5 213.5 1175.2 240.8 1202 234"
              stroke="white"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ mixBlendMode: 'overlay' }}
              variants={draw}
              custom={8}
            />
            <motion.path
              d="M1225.49 78.5698C1225.49 78.5698 1155.13 107.991 1084.39 89.5374C1084.39 89.5374 1076.66 131.244 1054.18 181.5M1172.1 417.562C1102.87 338.498 980.272 290.754 980.272 290.754C1014.26 258.119 1038.03 217.603 1054.18 181.5M1054.18 181.5C1080.5 213.5 1175.2 240.8 1202 234"
              stroke="url(#paint4_linear_1090_3543)"
              stroke-width="32"
              stroke-linecap="round"
              stroke-linejoin="round"
              variants={draw}
              custom={9}
            />
            <motion.defs>
              <linearGradient
                id="paint0_linear_1090_3543"
                x1="155.082"
                y1="80.3096"
                x2="155.082"
                y2="422.67"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1090_3543"
                x1="650.448"
                y1="16.0142"
                x2="650.448"
                y2="208.976"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1090_3543"
                x1="396.005"
                y1="26.6992"
                x2="396.005"
                y2="241.231"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_1090_3543"
                x1="910.32"
                y1="16"
                x2="910.32"
                y2="234.857"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_1090_3543"
                x1="1102.88"
                y1="78.5698"
                x2="1102.88"
                y2="417.562"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </motion.defs>
          </motion.svg>
          <motion.img
            initial="hidden"
            animate="visible"
            variants={MapFloatAnimation}
            style={{
              width: '100%',
              margin: '0 auto',
            }}
            src="/map.png"
            alt=""
          />
        </div>
      </MainLayoutContent>
      <BottomContent>
        <BottomLabel>아래로 스크롤해보세요!</BottomLabel>
        <ArrowBottomIcon />
      </BottomContent>
    </MainLayout>
  );
}

const BottomLabel = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`;

const BottomContent = styled.div`
  z-index: 100000;
  display: flex;
  width: 100%;
  padding: 32px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, rgba(42, 29, 76, 0) 0%, #2a1d4c 100%);
`;

const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const MainLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 128px;
  gap: 32px;
  width: 100%;
`;

const Title = styled(motion.div)`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`;
